import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {

  perfiles: any[] = [
    {fistname:'luis',lastname:'1'},
    {fistname:'luis',lastname:'2'},
    {fistname:'luis',lastname:'3'},
    {fistname:'luis',lastname:'4'}
]
}
