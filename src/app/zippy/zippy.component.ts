import { Component, Input } from '@angular/core';

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
    @Input() title : string;
    isExpanded : boolean = false;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    
}