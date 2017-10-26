import { Component } from '@angular/core';

@Component({
    selector:'titulo',
    templateUrl:'./profile.component.html'
    

})
export class ProfileComponent{
profiles: any[] = [
    {fistname:'luis',lastname:'1'},
    {fistname:'luis',lastname:'2'},
    {fistname:'luis',lastname:'3'},
]
}