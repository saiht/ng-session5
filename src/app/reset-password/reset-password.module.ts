import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ResetPasswordComponent } from './reset-password.component';


@NgModule({
    declarations: [ResetPasswordComponent],
    exports: [ResetPasswordComponent],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ]
})
export class ResetPasswordModule {

}