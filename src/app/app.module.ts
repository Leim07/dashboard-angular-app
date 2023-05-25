import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { PatrimonioModule } from './patrimonio/patrimonio.module';
import { PatrimonioService } from './patrimonio.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { PatrimonioGraficoComponent } from './patrimonio-grafico/patrimonio-grafico.component';
//import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    PatrimonioGraficoComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    PatrimonioModule,
    FormsModule    
  ],
  providers: [
    PatrimonioService,
    //AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
