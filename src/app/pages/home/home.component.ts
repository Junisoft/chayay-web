import { Component, OnInit } from '@angular/core';
import { SlideModel } from 'src/app/models/slide.model';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public phoneWA: string = '51925927848';
  public loQuieroLink: string = `https://wa.me/${this.phoneWA}?text=Hola, necesito información sobre internet para empresas`;

  // public carrouselImgs = [
  //   {link: "", url:'assets/img/slide/sl-04.jpg'},
  //   {link: "", url:'assets/img/slide/sl-02-min.jpg'},
  //   {link: "", url:'assets/img/slide/sl-03-min.jpg'}
  // ];

  slideImgs: SlideModel[];

  constructor(private infoPageService: InfoPageService) { 
    this.slideImgs = [];
    this.getInfoSlide();
  }

  ngOnInit(): void {

  }

  getInfoSlide(){
    this.infoPageService
      .getSlideImages().subscribe(resp => {
        this.slideImgs = resp;
    });
  }

}
