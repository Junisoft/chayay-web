import { Component, OnInit } from '@angular/core';
import { FooterLinks } from 'src/app/interfaces/footer-links.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks: FooterLinks = {
    facebook: "https://www.facebook.com/laninversat",
    instragram: "https://www.instagram.com/chayayperu/",
    procedimientoReclamos: "#",
    condicionesUso: "#",
    directivaReclamos: "#",
    condicionesUsoSitioWeb: "#",
    politicasUsoInternet: "#",
    reclamoAtencion: "#",
    reclamoProducto: "#"
  }

  constructor() { }

  ngOnInit(): void {
  }


}
