import { Component, OnInit } from '@angular/core';

/* API */
import { AuthService } from '@api/auth/auth.service';

@Component({
  selector: 'app-pending-verify',
  templateUrl: './pending-verify.component.html',
  styleUrls: ['./pending-verify.component.scss']
})
export class PendingVerifyComponent implements OnInit {
  email = localStorage.getItem('CABIM-email');

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logout();
  }

}
