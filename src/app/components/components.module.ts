import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
