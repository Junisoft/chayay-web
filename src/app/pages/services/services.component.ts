import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  myCurrentUrl = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const myRoute = this.router.url;
    this.myCurrentUrl = myRoute.replace('/', '');
  }

}
