import { Component, OnInit, Input, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    private commonService: CommonService) { }

  ngOnInit(): void {
    const state = this.router.url === '/inicio';
    debugger;
    this.commonService.sendData(state);
  }

  // ngOnDestroy(): void {
  //   this.commonService.clearData();
  // }

}
