import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterOutlet } from '@angular/router';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet],
  standalone: true
})
export class AppComponent implements OnDestroy {
  private sub: any;
  private progressRef: NgProgressRef;

  constructor(private progress: NgProgress, private router: Router) {
    this.progressRef = this.progress.ref();

    // Listen to navigation events to start or complete the progress bar loading
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.progressRef.start();
      } else if (event instanceof NavigationEnd ||
                 event instanceof NavigationCancel ||
                 event instanceof NavigationError) {
        this.progressRef.complete();
      }
    }, (error: any) => {
      this.progressRef.complete();
    });
  }

  ngOnDestroy(): any {
    this.sub.unsubscribe();
  }
}
