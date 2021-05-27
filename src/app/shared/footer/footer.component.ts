import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public facebook_link: string = "https://www.facebook.com/laninversat";
  public instagram_link: string = "https://www.instagram.com/chayayperu/";

}
