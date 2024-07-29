import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProdutosModule } from './produtos/produto.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProdutosModule,
    AppComponent
  ],
  providers: []
})
export class AppModule { 

}

platformBrowserDynamic().bootstrapModule(AppModule) 
