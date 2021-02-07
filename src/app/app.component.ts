import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  currencyAmount: number;
  amount: number;
  miles: number;

  car = {
    name: 'nissan',
    model: 'sentra',
    year: '2021' 
  };

  onNameChange(value: string){
    this.name = value;
  }

  onDateChange(value: string){
    this.date = value;
  }

  onCurrencyAmountChange(value: string){
    this.currencyAmount = parseFloat(value); 
  }

  onAmountChange(value: string){
    this.amount = parseFloat(value); 
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value); 
  }
}
