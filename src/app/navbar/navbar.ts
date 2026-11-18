import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  brandName = 'MyApp';
  links = ['Home', 'Projects', 'About', 'Contact'];
  activeLink = signal('Home');

  selectLink(link: string) {
    this.activeLink.set(link);
  }
}