import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestroComponent } from './component/add-restro/add-restro.component';
import { UpdateRestroComponent } from './component/update-restro/update-restro.component';
import { ListRestroComponent } from './component/list-restro/list-restro.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    AddRestroComponent,
    UpdateRestroComponent,
    ListRestroComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
      HttpClientModule,
      ReactiveFormsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
