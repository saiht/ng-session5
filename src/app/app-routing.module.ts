import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZippyComponent } from './zippy/zippy.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ContactComponent } from './contact/contact.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const AppRoute: Routes = [
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
        component: ResetPasswordComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{
    constructor() {
        console.log(AppRoute);
    }
}