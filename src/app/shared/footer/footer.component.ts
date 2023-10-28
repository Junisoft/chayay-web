import { Component, OnInit } from '@angular/core';
import { IFooterLinks } from 'src/app/interfaces/footer-links.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks: IFooterLinks = {
    facebook: "https://www.facebook.com/laninversat",
    instragram: "https://www.instagram.com/chayayperu/",
    procedimientoReclamos: "#",
    condicionesUso: "#",
    directivaReclamos: "#",
    condicionesUsoSitioWeb: "#",
    politicasUsoInternet: "#",
    libroReclamaciones: "https://forms.gle/PPJo1W8PfZpUWqEQ9"
  }

  constructor() { }

  ngOnInit(): void {
  }


}
