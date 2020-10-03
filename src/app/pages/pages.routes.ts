import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            {
                path: 'inicio',
                component: HomeComponent
            },
            {
                path: 'nosotros',
                component: AboutComponent
            },
            {
                path: 'servicios',
                component: ServicesComponent
            },
            {
                path: 'planes',
                component: PricingComponent
            },
            {
                path: 'contacto',
                component: ContactComponent
            },
            {
                path: '',
                redirectTo: '/inicio',
                pathMatch: 'full'
            }
        ]
    }
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
