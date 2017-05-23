import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent{
    title: string = 'Contact form';

    onSubmit(form) {
        console.log(form); // see the _value / or _errors
    }
}