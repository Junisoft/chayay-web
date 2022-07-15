import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { AppRoutingModule } from './app-routing.module';
import { AbstractPlanService } from './services/plan.abstract-service';
import { PlanService } from './services/plan.service';
import { MockPlanService } from './services/mock/mock-plan.service';

const production = [
  { provide: AbstractPlanService, useClass: PlanService }
];

const test = [
  { provide: AbstractPlanService, useClass: MockPlanService }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    ...test,
    //...production
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
