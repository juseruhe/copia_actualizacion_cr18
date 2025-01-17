import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/* Form control */
import { controlField } from './form';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* API */
import { AuthService } from '@api/auth/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: [
    './recover-password.component.scss'
  ]
})
export class RecoverPasswordComponent implements OnInit {

  form!: FormGroup 

  controlField: IControlField = controlField;

  loader = false;

  token!: string;

  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.params["token"];
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group(this.controlField.fields);
  }

  /**
   * Change form loader value
   * @param value: Loader value
   */
  private changeFormLoader(value: boolean) {
    this.loader = value;
    if (value) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  async onSubmit() {
    if (this.form.valid) {
      this.changeFormLoader(true);
      //const password = this.form.get('password').value;
      try {
        await this.authService.restorerPassword(password, this.token);
        this.toastrService.success('Contraseña actualizada con éxito.', 'Felicidades!');
        this.router.navigate(['/login']);
      } catch (error) {
        console.warn('Error@RecoverPasswordComponent@onSubmit:', error);
      }
      this.changeFormLoader(false);
    }
  }

  changeShowPassword() {
    this.showPassword = !this.showPassword;
  }

  get passwordControl(): FormControl | undefined {
    const control = this.form?.get('password');
    return control instanceof FormControl ? control : undefined;
  }

}
