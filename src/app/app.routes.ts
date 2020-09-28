import { RouterModule, Routes} from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    {path: '', component: PagesComponent},
    {path: 'inicio', component: PagesComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});