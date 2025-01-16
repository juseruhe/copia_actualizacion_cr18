import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/* API */
import { AuthService } from '@api/auth/auth.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verify();
  }

  private async verify(): Promise<void> {
    try {
      await this.authService.verify(this.activatedRoute.snapshot.params.token);
      this.toastrService.success('Correo electrónico verificado con éxito', 'Felicidades');
      this.router.navigate(['/']);
    } catch (error) {
      console.warn('Error@EmailVerifyComponent@verify:', error);
    }
  }

}
