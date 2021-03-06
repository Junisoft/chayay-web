import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

// Rutas
import { APP_ROUTES } from './app.routes';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    APP_ROUTES,
    RouterModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
