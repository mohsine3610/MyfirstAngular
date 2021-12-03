import { Component } from '@angular/core';

export interface Data{
  price: number | undefined;
  amount : number | undefined;
  total : number | undefined;
}
const data: Data[] = [
  {price: 89.03, amount: 0.15, total: 126.00},
  {price: 94.02, amount: 0.18, total: 126.00},
  {price: 92.06, amount: 0.22, total: 252.00},
  {price: 95.20, amount: 0.26, total: 176.00},
  {price: 95.30, amount: 0.31, total: 226.00},
  {price: 92.01, amount: 0.35, total: 2326.00},
  {price: 97.34, amount: 0.53, total: 2243.00},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['price', 'amount', 'total'];
   dataSource = data;
   clickedRows = new Set<Data>();
}
