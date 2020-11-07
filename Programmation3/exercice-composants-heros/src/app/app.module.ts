import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { EnteteComponent } from './entete/entete.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeroComponent } from './hero/hero.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    EnteteComponent,
    RechercheComponent,
    CarouselComponent,
    HeroComponent,
    PiedDePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
