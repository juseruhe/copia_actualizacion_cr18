import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-road-map-modal',
  templateUrl: './road-map-modal.component.html',
  styleUrls: ['./road-map-modal.component.scss']
})
export class RoadMapModalComponent implements OnInit, AfterContentInit, AfterViewChecked {

  slideShow: any;
  title = 'RECORRIDO POR LA RUTA';

  constructor(
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (this.slideShow) {
      this.slideShow.update();
    }
    this.cdRef.detectChanges();
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.createSlideShow();
    }, 0);
  }

  private createSlideShow() {
    this.slideShow = new Swiper('.swiper-container', {
      slidesPerView: 1,
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
