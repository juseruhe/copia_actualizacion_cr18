import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements AfterViewInit {

  @ViewChild('bottomElement') bottomElement: ElementRef;

  @ViewChild('wrapperElement') wrapperElement: ElementRef;

  minHeight: string;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => this.calculateWrapper(), 50);
  }

  onResize(event) {
    this.calculateWrapper();
  }

  private calculateWrapper(): void {
    this.minHeight = `${window.innerHeight - this.bottomElement.nativeElement.offsetHeight}px`;
  }

}
