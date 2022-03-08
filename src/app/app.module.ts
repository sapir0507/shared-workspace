import { RegisterModule } from './../layout/register/register.module';
import { LoginModule } from './../layout/login/login.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
