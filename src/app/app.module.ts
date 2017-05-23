import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ZippyModule } from './zippy/zippy.module';
import { ContactModule } from './contact/contact.module'
import { SubscriptionModule } from './subscription/subscription.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ZippyModule,
    ContactModule,
    SubscriptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
