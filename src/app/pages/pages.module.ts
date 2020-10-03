import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

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
        SharedModule,
        PAGES_ROUTES
    ],
})
export class PagesModule {}
