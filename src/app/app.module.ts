import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { AnimalComponent } from './components/animal/animal.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { InfoComponent } from './components/info/info.component';
import { LocaisComponent } from './components/locais/locais.component';
import { LocalComponent } from './components/local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AnimalComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    InfoComponent,
    LocaisComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
