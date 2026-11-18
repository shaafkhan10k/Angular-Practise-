import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})

export class Calculator {
longButtons: string[] = ["AC" , "CE"];
Buttons: string[] = ['7','8','9','/',
                     '4','5','6','*',
                     '1','2','3','=','+'];

}
  