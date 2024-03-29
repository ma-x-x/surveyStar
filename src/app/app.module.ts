import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, TabsModule } from 'ng2-bootstrap';
// import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';


import { AppComponent } from './app.component';
import { NoContentComponent } from './pages/no-content/no-content.component'
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routes';
//Utilities
import * as _ from 'lodash';

export function highchartsFactory() {
  return require('highcharts');
}
@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    // DatepickerModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    ChartModule,
    PagesModule,
    routing
  ],
  providers: [
    {
      provide: highchartsFactory,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
