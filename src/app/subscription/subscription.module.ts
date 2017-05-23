import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { SubscriptionComponent } from './subscription.component';

@NgModule({
    declarations: [SubscriptionComponent],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    exports: [SubscriptionComponent],
    providers: []
})
export class SubscriptionModule{

}