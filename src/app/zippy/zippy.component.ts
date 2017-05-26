import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'zippy',
    templateUrl: './zippy.component.html',
    styles: [`
        .zippy-title:hover {
            cursor: pointer;
        }
    `]
})
export class ZippyComponent{
    @Input() title : string= 'pas de titre';
    isExpanded : boolean = false;

    constructor( private _route: ActivatedRoute) {
        console.log(_route);
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    
}