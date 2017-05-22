import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ZippyComponent } from './zippy.component';


@NgModule({
    declarations: [
    ZippyComponent
  ],
  exports: [ZippyComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})
export class ZippyModule{

}