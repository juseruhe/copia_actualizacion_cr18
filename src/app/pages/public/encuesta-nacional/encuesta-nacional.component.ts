import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs';

/* Components */
import { YtModalComponent } from '@component/partials-landing/yt-modal/yt-modal.component';



@Component({
  selector: 'app-encuesta-nacional',
  templateUrl: './encuesta-nacional.component.html',
  styleUrls: ['./encuesta-nacional.component.scss']
})
export class EncuestaNacionalComponent implements OnInit,OnDestroy {
  framentSubs: Subscription;

  constructor( private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.startListeningFragment();
  }

  ngOnDestroy(): void {
    if (this.framentSubs) {
      this.framentSubs.unsubscribe();
    }
  }

  private startListeningFragment(): void {
    this.framentSubs = this.activatedRoute.fragment.subscribe((fragment) => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView();
      }
    });
  }




}
