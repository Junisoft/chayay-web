import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';

const pagesRoutes: Routes = [
  {
      path: '', component: PagesComponent,
      children: [
        { path: 'inicio', component: HomeComponent },
        { path: 'nosotros', component: AboutComponent },
        { path: 'servicios', component: ServicesComponent },
        { path: 'planes', component: PricingComponent },
        { path: 'contacto', component: ContactComponent },
        { path: '', redirectTo: '/inicio', pathMatch: 'full' }
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
