import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ServerDataSource } from 'ng2-smart-table';
import { takeUntil } from 'rxjs/operators';

/* API */
import { CompanyService } from '@api/company/company.service';

/* Components */
import { DeleteModalComponent } from '@component/crud-modal/delete-modal/delete-modal.component';
import { CrudActionButtonComponent } from 'src/app/shared/crud-action-button/crud-action-button.component';

/* Models */
import { Category } from '@model/Category';
import { City } from '@model/City';
import { Company } from '@model/Company';

/* Interfaces */
import { ICrudConfig } from '@component/matrix-manage/interfaces/ICrudConfig';
import { ISearchFilter } from '@interface/ISearchFilter';
import { IPagination } from '@interface/IPagination';

/* Utils */
import { CrudActionButtonService } from '@util/crud-action-button/crud-action-button.service';
import { StorageService } from '@util/storage/storage.service';

/* Enums */
import { ERole } from '@enum/role.enum';
import { AuthService } from '@api/auth/auth.service';
import { ReportModalComponent } from '@component/report-modal/report-modal.component';
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.scss']
})
export class AdminCompanyComponent implements OnInit, OnDestroy {

  $destroy: Subject<boolean> = new Subject<boolean>();
  loader = false;

  source: ServerDataSource;

  categoryList: Category[] = [];
  cityList: City[] = [];
  sizeCompanyList: string[] = [];

  settings = {
    attr: {
      class: 'table table-striped table-bordered table-responsive-md'
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      companyName: {
        title: 'Nombre'
      },
      nit: {
        title: 'NIT'
      },
      inChargeName: {
        title: 'Responsable BIM'
      },
      charge: {
        title: 'Cargo'
      }
    },
  };

  canCrud = false;

  constructor(
    private companyService: CompanyService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    @Inject('CRUD_CONFIG') public crudConfig: ICrudConfig,
    private crudActionButtonService: CrudActionButtonService,
    private storageService: StorageService,
    private authService: AuthService,
    private matrixResponseService: MatrixResponseService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.categoryList = this.activatedRoute.snapshot.data.categoryList || this.categoryList;
    this.cityList = this.activatedRoute.snapshot.data.cityList || this.cityList;
    this.sizeCompanyList = this.activatedRoute.snapshot.data.sizeCompanyList || this.sizeCompanyList;
    this.getCompany();
    this.startListeningCrudButton();
    this.canCrud = [ERole.SUPERADMIN, ERole.ADMIN].includes(this.storageService.getRole());

    if (this.canCrud) {
      this.settings.columns['actions'] = {
        title: 'Acciones',
        type: 'custom',
        renderComponent: CrudActionButtonComponent,
        filter: false,
        sort: false
      };
    }
  }

  private startListeningCrudButton(): void {
    this.crudActionButtonService.action.pipe(takeUntil(this.$destroy))
      .subscribe(response => {
        switch (response.mode) {
          case 'edit':
            this.edit(response.row);
            break;
          case 'delete':
            this.delete(response.row);
            break;
            case 'file':
              this.report(response.row);
              break;
        }
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

  private async getCompany(): Promise<void> {
    try {
      if (this.loader) {
        return;
      }
      this.loader = true;
      this.source = await this.companyService.paginate() as ServerDataSource;
    } catch (error) {
      console.warn('Error@AdminCompanyComponent@getCompany:', error);
    }
    this.loader = false;
  }

  async create(): Promise<void> {
    const modalRef = this.modalService.open(this.crudConfig.createClass, {
      size: 'lg'
    });
    modalRef.componentInstance.data = {
      categoryList: this.categoryList,
      cityList: this.cityList,
      sizeCompanyList: this.sizeCompanyList
    };
    const response = await modalRef.result;
    if (response) {
      const result = response.company;
      result.show = true;
      this.source.prepend(result);
    }
  }

  async edit(record: any): Promise<void> {
    const modalRef = this.modalService.open(this.crudConfig.editClass, {
      size: 'lg',
    });
    modalRef.componentInstance.data = {
      record,
      categoryList: this.categoryList,
      cityList: this.cityList,
      sizeCompanyList: this.sizeCompanyList
    };
    const response = await modalRef.result;
    if (response) {
      const result = response.company;
      await this.source.update(record, result);
      this.source.refresh();
    }
  }

  async delete(record: any): Promise<void> {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.title = `Eliminar ${this.crudConfig.name}`;
    modalRef.componentInstance.data = { record };
    const response = await modalRef.result;
    if (response) {
      const result = response.company;
      this.source.remove(record);
    }
  }

  async donwload() {
    try {
      this.loader = true;
      await this.companyService.getExcel();
    } catch (error) {
      console.warn('Error@AdminCompanyComponent@donwload:', error);
    }
    this.loader = false;
  }

  async report(record: any) {
    if (record.user.roleId != 3) {
      this.toastrService.error("Error",`La empresa ${record.companyName} no es una cuenta tipo Empresa`)
    } else {
      
      const user = await this.matrixResponseService.findUserType(record.user.id)
      console.log("user",user.data)


      const fechaActual = new Date();

      // Calcular la fecha actual menos 6 meses
      const fechaHaceSeisMeses = new Date();
      fechaHaceSeisMeses.setMonth(fechaHaceSeisMeses.getMonth() - 6);
      
      // Filtrar registros basados en la fecha más reciente o en los últimos 6 meses
      const registrosFiltrados = user.data.filter(registro => {
        const fechaRegistro = new Date(registro.createdAt);
        return fechaRegistro >= fechaHaceSeisMeses || fechaRegistro.toDateString() === fechaActual.toDateString();
      });
      


      if (user.data && registrosFiltrados && registrosFiltrados.length > 31 ) {


        const email = record.user.email
        try {
          const emailAdmin = this.storageService.getEmail()
          await this.authService.loginEmail(email)
          this.storageService.setEmailAdmin(emailAdmin)
        } catch (err) {
          console.warn('Error@AdminPersonComponent@onSubmit:', err);
        }

        // Obtén las fechas como objetos Date
const dates = user.data.map(item => new Date(item.createdAt));

// Encuentra la fecha máxima directamente
const maxDateDirect = new Date(Math.max(...dates));

// Encuentra la fecha máxima considerando 6 meses después
const maxDateWithSixMonths = dates.reduce((maxDate, currentDate) => {
  const sixMonthsLater = new Date(currentDate);
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  return sixMonthsLater > maxDate ? sixMonthsLater : maxDate;
}, new Date(0));

const today = new Date()

         if( today < maxDateWithSixMonths){
        const modalRef = this.modalService.open(ReportModalComponent, {
          size: 'xl',

          scrollable: true,
          windowClass: 'modal-fullscreen'
        })

        // Cierre de modal
        modalRef.result.then(() => {

        }, () => {
          const email = this.storageService.getEmailAdmin()

          try {
            this.authService.loginEmail(email)
          } catch (err) {
            console.warn('Error@ReportModalComponent@onSubmit:', err);
          }

          localStorage.removeItem('emailAdmin')
          this.modalService.dismissAll()
        })
      }else{
        const emailA = this.storageService.getEmailAdmin()
        await this.authService.loginEmail(emailA)
        this.toastrService.error("¡Error!",`La empresa ${record.companyName} no ha llenado la encuesta`)
      }
      } else {
       this.toastrService.error("¡Error!",`La empresa ${record.companyName} no ha llenado la encuesta`)
      }


    }

  }

}
