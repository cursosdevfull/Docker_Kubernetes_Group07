import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

const routes: Routes = [
  { path: '', component: Componente1Component },
  { path: 'componente2', component: Componente2Component },
]

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
