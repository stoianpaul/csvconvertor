import { Component } from '@angular/core';
import {
  ViewChild,
  AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  // @ViewChild(CdkVirtualScrollViewport)
  // cdkVirtualScrollViewport: CdkVirtualScrollViewport;
  private files: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
      this.files = [
        {
          path: "cucu"
        },
        {
          path: "cucu"
        },
        {
          path: "cucu"
        },
        {
          path: "cucu"
        },
        {
          path: "cucu"
        },
        {
          path: "cucu"
        },
        {
          path: "cucu"
        },
        {
          path: "cucu"
        },
        {
          path: "cucu"
        },
        {
          path: "cucu"
        }
      ]
    }
}