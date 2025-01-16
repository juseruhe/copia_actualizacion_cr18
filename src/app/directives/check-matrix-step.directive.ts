import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlContainer, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appCheckMatrixStep]'
})
export class CheckMatrixStepDirective implements AfterViewInit, OnDestroy, OnInit {

  private statusSubcription: Subscription;
  private currentClass: string;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private controlContainer: ControlContainer
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.statusSubcription) {
      this.statusSubcription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.statusSubcription = this.controlContainer.control.statusChanges.subscribe(value => {
      this.check(value);
    });
    this.check(this.controlContainer.control.status);
  }

  private check(status: string): void {
    if (['VALID', 'INVALID'].indexOf(status) === -1) {
      return;
    }

    this.renderer.removeClass(this.hostElement.nativeElement, this.currentClass);
    this.currentClass = status.toLocaleLowerCase();
    this.renderer.addClass(this.hostElement.nativeElement,  this.currentClass);
  }

}
