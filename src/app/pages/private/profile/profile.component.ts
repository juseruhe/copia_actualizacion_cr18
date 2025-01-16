import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/* Form control */
import { controlField } from './form';

/* Interfaces */
import { IDocumentType } from '@interface/IDocumentType';
import { IControlField } from '@interface/IControlField';
import { IProfileData } from '@interface/IProfileData';

/* Models */
import { Category } from '@model/Category';
import { City } from '@model/City';
import { Company } from '@model/Company';
import { Person } from '@model/Person';
import { User } from '@model/User';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

/* API */
import { UserService } from '@api/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  personForm: FormGroup;
  companyForm: FormGroup;
  passwordForm: FormGroup;
  controlField: IControlField = controlField;

  loader = false;
  passwordloader = false;

  documentTypeList: IDocumentType[] = [];
  cityList: City[] = [];
  categoryList: Category[] = [];
  sizeCompanyList: string[] = [];

  user: User = {};
  profile: Company | Person = {};

  forceDisable = [
    'email',
    'nit'
  ];

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.documentTypeList = this.activatedRoute.snapshot.data.documentTypeList || this.documentTypeList;
    this.cityList = this.activatedRoute.snapshot.data.cityList || this.cityList;
    this.categoryList = this.activatedRoute.snapshot.data.categoryList || this.categoryList;
    this.sizeCompanyList = this.activatedRoute.snapshot.data.sizeCompanyList || this.sizeCompanyList;
    await this.getProfile();
    this.buildForm();
  }

  private async getProfile(): Promise<void> {
    try {
      const response = await this.userService.getProfile();
      this.user = response.data.user;
      this.profile = this.storageService.getType() === 1 ?
        this.user.company : this.user.person;
       
    } catch (error) {
      console.warn('Error@ProfileComponent@onSubmit:', error);
    }
  }

  private buildForm() {
    if (this.storageService.getType() === 1) {
      this.companyForm = this.fb.group(this.controlField.fields.company);
      this.prepareForm(this.companyForm, this.profile, this.controlField.fields.company);
    } else {
      this.personForm = this.fb.group(this.controlField.fields.person);
      this.prepareForm(this.personForm, this.profile, this.controlField.fields.person);
    }

    this.passwordForm = this.fb.group(this.controlField.fields.changePassword);
  }

  private prepareForm(form: FormGroup, record: Company | Person, fieldStructure: any) {
    for (const key in fieldStructure) {
      if (Object.prototype.hasOwnProperty.call(fieldStructure, key)) {
        form.controls[key].patchValue(record[key]);
      }
    }
    form.controls.email.patchValue(this.user.email);
  }

  private changeFormLoader(form: FormGroup, loader: boolean, value: boolean) {
    loader = value;
    if (value) {
      form.disable();
    } else {
      form.enable();
    }
    this.forceDisable.forEach(field => {
      if (form.controls[field]) {
        form.controls[field].disable();
      }
    });
  }

  personRegister() {
    const data: IProfileData = this.personForm.getRawValue();
    this.onSubmit(this.personForm, data);
  }

  companyRegister() {
    const data: IProfileData = this.companyForm.getRawValue();
    this.onSubmit(this.companyForm, data);
  }

  private async onSubmit(form: FormGroup, register: IProfileData) {
    if (form.valid) {
      this.changeFormLoader(form, this.loader, true);
      try {
        const response = await this.userService.updateProfile(register);
        this.toastrService.success('Perfil actualizado con éxito.', 'Felicidades!');
      } catch (error) {
        console.warn('Error@ProfileComponent@onSubmit:', error);
      }
      this.changeFormLoader(form, this.loader, false);
    }
  }

  async changePassword() {
    if (this.passwordForm.valid) {
      if (!this.confirmPassword()) {
        this.toastrService.warning('Las contraseñas no coinciden.',  'Felicidades!');
        return;
      }
      this.changeFormLoader(this.passwordForm, this.passwordloader, true);
      try {
        const response = await this.userService.updatePassword(this.passwordForm.value);
        this.toastrService.success('Perfil actualizado con éxito.', 'Felicidades!');
      } catch (error) {
        console.warn('Error@ProfileComponent@onSubmit:', error);
      }
      this.changeFormLoader(this.passwordForm, this.passwordloader, false);
    }
  }

  private confirmPassword(): boolean {
    return this.passwordForm.controls.newPassword.value === this.passwordForm.controls.confirmPassword.value;
  }

}
