import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { routing }       from './pages.routes';

import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { AuthenticationService } from '../services/authentication.service';
import { AuthGuard } from '../services/guard.service';
import { Pages } from './pages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AppFooterComponent } from '../widgets/app-footer/app-footer.component';
import { AppHeaderComponent } from '../widgets/app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { TemplateDetailComponent } from './template/template-detail/template-detail.component';
import { TopicCreateComponent } from './template/topic-create/topic-create.component';
import { TemplateCreateOrEditComponent } from './template/template-create-or-edit/template-create-or-edit.component';
import { QuestionnairePlayComponent } from './questionnaire/questionnaire-play/questionnaire-play.component';
import { QuestionnaireService } from '../services/questionnaire'

@NgModule({
  imports: [CommonModule,BrowserModule,FormsModule,ReactiveFormsModule, routing],
  declarations: [
      Pages,
      SignupComponent,
      LoginComponent,
      LayoutsComponent,
      AppFooterComponent,
      AppHeaderComponent,
      HomeComponent,
      TemplateDetailComponent,
      TopicCreateComponent,
      TemplateCreateOrEditComponent,
      QuestionnairePlayComponent
    ],
  providers:[
    LocalStorageService,
    SessionStorageService,
    AuthenticationService,
    AuthGuard,
    QuestionnaireService
  ]
})
export class PagesModule {
}
