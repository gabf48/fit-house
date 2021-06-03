import { EchipaModule } from './echipa/echipa.module';
import { EchipaComponent } from './echipa/echipa.component';
import { CalculatorModule } from './calculator/calculator.module';
import { LoggingService } from './logging.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    CalculatorModule,
    BrowserAnimationsModule
  ],
 
      bootstrap: [AppComponent],
//      providers: [LoggingService]
    
})
export class AppModule { }
