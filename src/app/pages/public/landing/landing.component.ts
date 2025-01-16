import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

/* Components */
import { YtModalComponent } from '@component/partials-landing/yt-modal/yt-modal.component';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  framentSubs: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) { }

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

  showYT(): void {
    const modalRef = this.modalService.open(YtModalComponent, {
      size: 'lg'
    });
  }

  goToEncuestaNacional(event: any){
    event.preventDefault()
  this.router.navigate(['/encuesta-nacional'])
  }

 goToResultados(event: any){
  event.preventDefault()
  window.location.href = "https://camacol.co/productividad-sectorial/digitalizacion"
 }

}
