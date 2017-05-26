import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';


import { AppComponent } from './app.component';

import { ZippyModule } from './zippy/zippy.module';
import { ZippyComponent } from './zippy/zippy.component';

import { ContactModule } from './contact/contact.module';
import { ContactComponent } from './contact/contact.component';

import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionComponent } from './subscription/subscription.component';

import { ResetPasswordModule } from './reset-password/reset-password.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ZippyModule,
    ContactModule,
    SubscriptionModule,
    ResetPasswordModule,
    RouterModule.forRoot([
      {
        path: 'zippy',
        component: ZippyComponent
      },
      {
        path: 'subscription',
        component: SubscriptionComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'reset',
        component: ResetPasswordComponent,
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
