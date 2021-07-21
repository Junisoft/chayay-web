import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SlideModel } from '../models/slide.model';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  constructor(private http: HttpClient) { }

  getSlideImages(){
    return this.http.get<SlideModel[]>("https://angular-html-6e251.firebaseio.com/slide.json");
  }


}
