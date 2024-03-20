import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeletorCidadeComponent } from './seletor-cidade/seletor-cidade.component';
import { InformacaoClimaComponent } from './informacao-clima/informacao-clima.component';
import { DetalhesClimaComponent } from './detalhes-clima/detalhes-clima.component';

@NgModule({
  declarations: [
    AppComponent,
    SeletorCidadeComponent,
    InformacaoClimaComponent,
    DetalhesClimaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
