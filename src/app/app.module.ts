import { CalculatorModule } from './calculator/calculator.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule} from '@angular/common';
import { TarifeModule } from "./tarife/tarife.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,  
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    CalculatorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    TarifeModule,
    FontAwesomeModule
  ],
 
      bootstrap: [AppComponent],
    
})
export class AppModule { }
