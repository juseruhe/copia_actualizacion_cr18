import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

/* Form control */
import { controlField } from './form';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* API */
import { AuthService } from '@api/auth/auth.service';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  resetForm: FormGroup;

  controlField: IControlField = controlField;

  loader = false;

  recoverform = false;

  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group(this.controlField.fields.login);
    this.resetForm = this.fb.group(this.controlField.fields.reset);
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

  async onSubmit() {
    if (this.form.valid) {
      this.changeFormLoader(this.form, true);
      const email = this.form.get('email').value.toLowerCase();
      const password = this.form.get('password').value;
      try {
        const response = await this.authService.login(email, password);
        this.toastrService.success(this.storageService.getName(), 'Bienvenido');
      } catch (error) {
        console.warn('Error@LoginComponent@onSubmit:', error);
      }
      this.changeFormLoader(this.form, false);
    }
  }

  async resetPassword() {
    if (this.resetForm.valid) {
      this.changeFormLoader(this.resetForm, true);
      const email = this.resetForm.get('email').value.toLowerCase();
      try {
        await this.authService.recoverPassword(email);
        this.toastrService.success('Enlace enviado con éxito.', 'Felicidades!');
        this.resetForm.reset();
        this.showRecoverForm();
      } catch (error) {
        console.warn('Error@LoginComponent@onSubmit:', error);
      }
      this.changeFormLoader(this.resetForm, false);
    }
  }

  /**
   * Clean email value
   * @param event: Event object
   */
  cleanEmail(event: object): void {
    this.form.controls.email.setValue(this.form.get('email').value.toLocaleLowerCase());
  }

  showRecoverForm() {
    this.recoverform = !this.recoverform;
  }

  changeShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
