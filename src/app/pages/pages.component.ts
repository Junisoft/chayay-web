import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, AfterViewInit {

  subscription: Subscription;
  showCarousel: boolean;
  myObservable: Observable<any>;

  constructor(
    private router: Router,
    private commonService: CommonService,
    private cd: ChangeDetectorRef) {
    }

  ngOnInit(): void {
    this.subscription = this.commonService.getData().subscribe(response => {
      this.showCarousel = response;
    });
  }

  ngAfterViewInit(): void {
    // this.cd.detectChanges();
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
