import { Component } from '@angular/core';

@Component({
    selector:'child-app',
    templateUrl:'./child.component.html'
})

export class ChildComponent {
    handleclick() {
        console.log('hey I am  clicked in child');
    }
}