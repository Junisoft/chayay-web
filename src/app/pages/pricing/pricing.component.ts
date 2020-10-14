import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  myCurrentUrl = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const myRoute = this.router.url;
    this.myCurrentUrl = myRoute.replace('/', '');
  }

}
