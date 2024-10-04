
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<nav style="background-color: #343a40; padding: 15px; border-radius: 0; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); width: 100%;">
  <ul style="list-style-type: none; margin: 0; padding: 0; display: flex; justify-content: space-around;">
  <li>
      <a routerLink="/inicio" style="color: #f8f9fa; text-decoration: none; padding: 10px; border-radius: 4px; transition: background-color 0.3s; display: inline-block;">INICIO</a>
    </li>
    <li>
      <a routerLink="/des" style="color: #f8f9fa; text-decoration: none; padding: 10px; border-radius: 4px; transition: background-color 0.3s; display: inline-block;">DES</a>
    </li>
    <li>
      <a routerLink="/dsa" style="color: #f8f9fa; text-decoration: none; padding: 10px; border-radius: 4px; transition: background-color 0.3s; display: inline-block;">DSA</a>
    </li>
    <li>
      <a routerLink="/sha" style="color: #f8f9fa; text-decoration: none; padding: 10px; border-radius: 4px; transition: background-color 0.3s; display: inline-block;">SHA-1</a>
    </li>
    <li>
      <a routerLink="/caesar" style="color: #f8f9fa; text-decoration: none; padding: 10px; border-radius: 4px; transition: background-color 0.3s; display: inline-block;">César</a>
    </li>
    <li>
      <a routerLink="/scytale" style="color: #f8f9fa; text-decoration: none; padding: 10px; border-radius: 4px; transition: background-color 0.3s; display: inline-block;">Escítala</a>
    </li>
  </ul>
</nav>

  `,
  styles: [`
    nav ul {
      list-style-type: none;
      padding: 0;
    }
    nav ul li {
      display: inline;
      margin-right: 10px;
    }
  `]
})
export class NavbarComponent {}
