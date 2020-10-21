import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        PricingComponent,
        ContactComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        RouterModule
    ],
})
export class PagesModule {}
