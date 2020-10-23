import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';



@NgModule({
  declarations: [
    HomeComponent,
    CatalogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
