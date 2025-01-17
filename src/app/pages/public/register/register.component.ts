import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/* Form control */
import { controlField } from './form';

/* Interfaces */
import { IControlField } from '@interface/IControlField';
import { IRegisterData } from '@interface/IRegisterData';
import { IDocumentType } from '@interface/IDocumentType';

/* Models */
import { City } from '@model/City';
import { Category } from '@model/Category';

/* API */
import { AuthService } from '@api/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

/* Components */
import { TermsModalComponent } from '@component/partials-register/terms-modal/terms-modal.component';

/* Services */
import { ManageApiErrorService } from '@service/manage-api-error/manage-api-error.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ConfirmModalComponent } from '@component/custom-modal/confirm-modal/confirm-modal.component';
import { environment } from '@env/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss'
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {

  personForm?: FormGroup;

  companyForm?: FormGroup;

  controlField: IControlField = controlField;

  loader = false;

  otherForm = true;

  showPassword = false;

  documentTypeList: IDocumentType[] = [];
  cityList: City[] = [];
  categoryList: Category[] = [];
  sizeCompanyList: string[] = [];

  $destroy = new Subject<boolean>();

  count = 0;

  temporalData?: IRegisterData;

  reCaptchaSiteKey = environment.reCaptchaSiteKey;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private manageApiErrorService: ManageApiErrorService
  ) { }

  ngOnInit() {
    this.documentTypeList = this.activatedRoute.snapshot.data['documentTypeList'] || this.documentTypeList
    this.cityList = this.activatedRoute.snapshot.data['cityList'] || this.cityList;
    this.categoryList = this.activatedRoute.snapshot.data['categoryList'] || this.categoryList;
    this.sizeCompanyList = this.activatedRoute.snapshot.data['sizeCompanyList'] || this.sizeCompanyList;
    this.buildForm();
    this.startListeningApiError();
   
  }
  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

    /**
   * Initialize listener of api error
   */
  private startListeningApiError(): void {
    this.manageApiErrorService.errorMessage.pipe(takeUntil(this.$destroy)).subscribe((error) => {
      switch (error.slug) {
        case 'nit-exist':
          this.count++;
          if (this.count > 3) {
            this.openRequestNit();
          }
          break;
      }
    });
  }

  private buildForm() {
    this.personForm = this.fb.group(this.controlField.fields.person);
    this.companyForm = this.fb.group(this.controlField.fields.company);
  }

  /**
   * Change form loader value
   * @param value: Loader value
   */
  private changeFormLoader(form: FormGroup, value: boolean) {
    this.loader = value;
    if (value) {
      form.disable();
    } else {
      form.enable();
    }
  }

  personRegister() {
    const data: IRegisterData | undefined = this.personForm?.getRawValue() ;
    //data.belongsBim = data.belongsBim === true;
    if (data) { 
      data.belongsBim = data.belongsBim === true; 
    } else { 
      console.error('data is undefined');
     }
  //  this.onSubmit(this.personForm, data);
  if (this.companyForm && data) {
    this.onSubmit(this.companyForm, data);
} else {
    // Maneja el caso cuando 'this.companyForm' o 'data' es undefined
    if (!this.companyForm) {
        console.log("La variable 'companyForm' es undefined");
    }
    if (!data) {
        console.log("La variable 'data' es undefined");
    }
}
  }

  companyRegister() {
    //const data: IRegisterData = this.companyForm.getRawValue();
    const data: IRegisterData | undefined = this.companyForm?.getRawValue();
if (data) {
  // Usa 'data' aquí
} else {
  console.error('companyForm o getRawValue() es undefined');
}

    /*data.allyCamacol = data.allyCamacol === true;
    data.belongsBim = data.belongsBim === true;*/

    if (data) {
      data.allyCamacol = data.allyCamacol === true;
      data.belongsBim = data.belongsBim === true;
  } else {
      // Maneja el caso cuando 'data' es undefined
      console.log("La variable 'data' es undefined");
  }
  
  //  this.onSubmit(this.companyForm, data);

  if (this.companyForm && data) {
    this.onSubmit(this.companyForm, data);
} else {
    // Maneja el caso cuando 'this.companyForm' o 'data' es undefined
    if (!this.companyForm) {
        console.log("La variable 'companyForm' es undefined");
    }
    if (!data) {
        console.log("La variable 'data' es undefined");
    }
}


  }

  private async onSubmit(form: FormGroup, register: IRegisterData) {
    if (form.valid) {
      this.changeFormLoader(form, true);
      try {
        this.temporalData = register;
        this.temporalData.city = +this.temporalData.city;

        // document in person
        if(register.documentType && register.documentType == 'NIT'){
          register.document = register.document+"-"+form.value.document2
        }

  

        // nit in enterprise
        if(register.nit){
          register.nit = register.nit+"-"+form.value.nit2
        }

    
   
        const response = await this.authService.register(register);
        this.toastrService.success(response.data.user.name, 'Bienvenido');
      } catch (error) {
        console.warn('Error@RegisterComponent@onSubmit:', error);
        
      }
      this.changeFormLoader(form, false);
    }
  }

  showOtherForm(value: boolean) {
    this.otherForm = value;
  }

  changeShowPassword() {
    this.showPassword = !this.showPassword;
  }

  openTerms() {
    const modalRef = this.modalService.open(TermsModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.title = 'Habeas data y política de tratamiento de datos';
  }

  openRequestNit() {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Solicitud de NIT';
    modalRef.componentInstance.description =
    `<p>Lo sentimos el nit: <strong>${this.companyForm?.controls["nit"].value}</strong>, ha sido registrado.`;
    modalRef.componentInstance.acceptText = 'Quiero reclamar esta cuenta';
    modalRef.componentInstance.data = true;
    modalRef.result.then(async (result) => {
      if (result) {
        this.requestNit();
      }
    });
  }

  private async requestNit() {
    try {
      this.loader = true;
      await this.authService.requestNit(this.temporalData );
      this.toastrService.success('Solicitud enviada con éxito', 'Felicidades!');
      this.reset();
    } catch (error) {
      console.warn('Error@RegisterComponent@requestNit:', error);
    }
    this.loader = false;
  }

  private reset() {
    this.personForm.reset();
    this.companyForm.reset();
    this.temporalData = null;
    this.count = 0;
  }

  changeValidatorsNIT(event: any){
    if (event.target.value == 'NIT') {
      // Cuando el tipo de documento es NIT, ajusta las validaciones
      this.personForm.get('document').setValidators([
        Validators.required,
        Validators.minLength(9), // Cambia el valor mínimo según tus necesidades
        Validators.maxLength(9),
        Validators.max(999999999),
        Validators.min(100000000) // Cambia el valor máximo según tus necesidades
      ]);


      this.personForm.get('document2').setValidators([
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(1),
        Validators.max(9),
        Validators.min(0)
      ])

      
      
  } else {
    this.personForm.get('document').setValidators([
      Validators.required,
      Validators.minLength(4), // Cambia el valor mínimo según tus necesidades
      Validators.maxLength(12)
    ])

  }

 }

 limiteCaracteres(event: Event, cantidadCaracteres: number): void {
  const input = event.target as HTMLInputElement;
  const maxLength = cantidadCaracteres;

  // Filtra y mantiene solo los caracteres numéricos y el signo negativo
  const inputValue = input.value.replace(/[^-\d]/g, '');

  // Verifica si el valor es menor o igual a 0 y restablece el valor a 0 si es necesario
  const numericValue = parseInt(inputValue, 10);
  if (isNaN(numericValue) || numericValue <= 0) {
    input.value = '';
    return;
  }

  // Trunca el valor si excede la longitud máxima
  if (inputValue.length > maxLength) {
    input.value = inputValue.slice(0, maxLength);
  }
}



}
