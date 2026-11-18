import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Calculator } from './calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}