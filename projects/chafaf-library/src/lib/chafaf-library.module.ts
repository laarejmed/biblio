import { NgModule } from '@angular/core';
import { ChafafLibraryComponent } from './chafaf-library.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChafafLibraryComponent,
    ButtonComponent,
    InputComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChafafLibraryComponent,
    ButtonComponent,
    InputComponent,
    ListComponent
  ]
})
export class ChafafLibraryModule { }
