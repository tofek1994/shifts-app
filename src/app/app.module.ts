import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConstraintsAdditionComponent } from './constraints-addition/constraints-addition.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ConstraintsAdditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, ConstraintsAdditionComponent]
})
export class AppModule { }
