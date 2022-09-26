import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { FormComponent } from './components/form/form.component';
import { CustomDirective } from './directives/custom.directive';
import { HostExampleComponent } from './components/host-example/host-example.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { SquarePipe } from './pipe/square.pipe';
import { Concatpipe } from './pipe/concat.pipe';
import { AgentComponent } from './components/agent/agent.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersontableComponent } from './components/persontable/persontable.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomepageComponent,
    NavbarComponent,
    PagenotfoundComponent,
    AboutusComponent,
    LoginpageComponent,
    ProductdetailsComponent,
    FormComponent,
    CustomDirective,
    HostExampleComponent,
    PipeExampleComponent,
    SquarePipe,
    Concatpipe,
    AgentComponent,
    AdminComponent,
    PersonFormComponent,
    PersontableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
