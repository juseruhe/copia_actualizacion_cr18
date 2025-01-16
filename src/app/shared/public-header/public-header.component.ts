import { Component, OnInit } from '@angular/core';

/* API */
import { AuthService } from '@api/auth/auth.service';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {

  isMenuCollapsed = true;

  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  isPrivate: boolean;
  name: string;
  email: string;

  ngOnInit(): void {
    this.isPrivate = this.storageService.getToken() !== null && this.storageService.getToken() !== undefined;
    this.name = this.storageService.getName();
    this.email = this.storageService.getEmail();
  }

  logOut() {
    this.authService.logout();
  }
}
