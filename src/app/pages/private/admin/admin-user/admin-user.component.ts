import { Component, EventEmitter, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/* Interfaces */
import { ICrudConfig } from '@component/matrix-manage/interfaces/ICrudConfig';
import { IDocumentType } from '@interface/IDocumentType';
import { IPagination } from '@interface/IPagination';
import { ISearchFilter } from '@interface/ISearchFilter';

/* API */
import { UserService } from '@api/user/user.service';

/* Models */
import { City } from '@model/City';
import { Regional } from '@model/Regional';
import { Role } from '@model/Role';

/* Components */
import { DeleteModalComponent } from '@component/crud-modal/delete-modal/delete-modal.component';
import { CrudActionButtonComponent } from 'src/app/shared/crud-action-button/crud-action-button.component';

/* API */
import { AdminProfileService } from '@api/admin-profile/admin-profile.service';

/* Utils */
import { CrudActionButtonService } from '@util/crud-action-button/crud-action-button.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit, OnDestroy {

  $destroy: Subject<boolean> = new Subject<boolean>();
  loader = false;

  source: ServerDataSource;

  documentTypeList: IDocumentType[] = [];
  cityList: City[] = [];
  roleList: Role[] = [];
  regionalList: Regional[] = [];

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
      completeName: {
        title: 'Nombre y apellidos'
      },
      area: {
        title: 'Área'
      },
      documentType: {
        title: 'Tipo identificación'
      },
      document: {
        title: 'Número identificación'
      },
      actions: {
        title: 'Acciones',
        type: 'custom',
        renderComponent: CrudActionButtonComponent,
        filter: false,
        sort: false
      }
    },
  };

  constructor(
    private userService: UserService,
    private adminProfileService: AdminProfileService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    @Inject('CRUD_CONFIG') public crudConfig: ICrudConfig,
    private crudActionButtonService: CrudActionButtonService
  ) { }

  ngOnInit(): void {
    this.documentTypeList = this.activatedRoute.snapshot.data.documentTypeList || this.documentTypeList;
    this.cityList = this.activatedRoute.snapshot.data.cityList || this.cityList;
    this.roleList = this.activatedRoute.snapshot.data.roleList || this.roleList;
    if (this.roleList) {
      this.roleList.splice(0, 1);
    }
    this.regionalList = this.activatedRoute.snapshot.data.regionalList || this.regionalList;
    this.getAdmin();
    this.startListeningCrudButton();
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
        }
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

  private async getAdmin(): Promise<void> {
    try {
      if (this.loader) {
        return;
      }
      this.loader = true;
      this.source = await this.adminProfileService.paginate() as ServerDataSource;
    } catch (error) {
      console.warn('Error@AdminUserComponent@getAdmin:', error);
    }
    this.loader = false;
  }

  async create(): Promise<void> {
    const modalRef = this.modalService.open(this.crudConfig.createClass, {
      size: 'lg'
    });
    modalRef.componentInstance.data = {
      documentTypeList: this.documentTypeList,
      cityList: this.cityList,
      roleList: this.roleList,
      regionalList: this.regionalList
    };
    const response = await modalRef.result;
    if (response) {
      const result = response.adminProfile;
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
      documentTypeList: this.documentTypeList,
      cityList: this.cityList,
      roleList: this.roleList,
      regionalList: this.regionalList
    };
    const response = await modalRef.result;
    if (response) {
      const result = response.adminProfile;
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
      const result = response.adminProfile;
      this.source.remove(record);
      // this.recordList = this.recordList.filter(r => r.id !== result.id );
    }
  }

  async donwload() {
    try {
      this.loader = true;
      await this.adminProfileService.getExcel();
    } catch (error) {
      console.warn('Error@AdminUserComponent@donwload:', error);
    }
    this.loader = false;
  }

}
