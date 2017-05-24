import { Component } from '@angular/core';

@Component({
    selector: 'reset-password',
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {
    title: string = 'Password reset form';

    onSubmit(form) {
        console.log(form);
    }
}