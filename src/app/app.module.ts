import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { PessoalistComponent } from './pessoas/pessoalist/pessoalist.component';
import { MenuComponent } from './navbar/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoalistComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
