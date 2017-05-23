import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [ContactComponent],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    exports: [ContactComponent]
})
export class ContactModule {

}