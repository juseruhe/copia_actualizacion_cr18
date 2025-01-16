import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/* Form control */
import { controlField } from './form';

/* Interfaces */
import { IDocumentType } from '@interface/IDocumentType';
import { IControlField } from '@interface/IControlField';

/* Models */
import { City } from '@model/City';
import { Company } from '@model/Company';
import { Person } from '@model/Person';
import { User } from '@model/User';
import { AdminProfile } from '@model/AdminProfile';
import { Regional } from '@model/Regional';

/* API */
import { UserService } from '@api/user/user.service';
import { Role } from '@model/Role';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  adminProfileForm: FormGroup;
  passwordForm: FormGroup;
  controlField: IControlField = controlField;

  loader = false;
  passwordloader = false;

  documentTypeList: IDocumentType[] = [];
  cityList: City[] = [];
  roleList: Role[] = [];
  regionalList: Regional[] = [];

  user: User = {};
  profile: AdminProfile = {};

  forceDisable = [
    'email',
    'roleId',
    'active'
  ];

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.documentTypeList = this.activatedRoute.snapshot.data.documentTypeList || this.documentTypeList;
    this.cityList = this.activatedRoute.snapshot.data.cityList || this.cityList;
    this.roleList = this.activatedRoute.snapshot.data.roleList || this.roleList;
    this.regionalList = this.activatedRoute.snapshot.data.regionalList || this.regionalList;
    await this.getProfile();
    this.buildForm();
  }

  private async getProfile(): Promise<void> {
    try {
      const response = await this.userService.getProfile();
      this.user = response.data.user;
      this.profile = this.user.adminProfile;
      console.log(response)
    } catch (error) {
      console.warn('Error@AdminProfileComponent@onSubmit:', error);
    }
  }

  private buildForm() {
    this.adminProfileForm  = this.fb.group(this.controlField.fields.adminProfile);
    this.prepareForm(this.adminProfileForm , this.profile, this.controlField.fields.adminProfile);
    this.passwordForm = this.fb.group(this.controlField.fields.changePassword);
  }

  private prepareForm(form: FormGroup, record: Company | Person, fieldStructure: any) {
    for (const key in fieldStructure) {
      if (Object.prototype.hasOwnProperty.call(fieldStructure, key)) {
        form.controls[key].patchValue(record[key]);
      }
    }
    form.controls.email.patchValue(this.user.email);
    form.controls.roleId.patchValue(this.user.roleId);
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

  adminProfileUpdate() {
    const data: AdminProfile = this.adminProfileForm.getRawValue();
    this.onSubmit(this.adminProfileForm, data);
  }

  private async onSubmit(form: FormGroup, profile: AdminProfile) {
    if (form.valid) {
      this.changeFormLoader(form, this.loader, true);
      try {
        const response = await this.userService.updateProfile(profile);
        this.toastrService.success('Perfil actualizado con éxito.', 'Felicidades!');
      } catch (error) {
        console.warn('Error@AdminProfileComponent@onSubmit:', error);
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
        console.warn('Error@AdminProfileComponent@onSubmit:', error);
      }
      this.changeFormLoader(this.passwordForm, this.passwordloader, false);
    }
  }

  private confirmPassword(): boolean {
    return this.passwordForm.controls.newPassword.value === this.passwordForm.controls.confirmPassword.value;
  }

}
