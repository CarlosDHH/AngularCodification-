// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular-codification';
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="width: 100%; height: 100%">
    <app-navbar style="display: flex; align-items: center; justify-content: center;"></app-navbar>

  <div >
    <router-outlet></router-outlet>
  </div>

  <footer style="height: 60px; background-color: #333; color: #999; display: flex; align-items: center; justify-content: center;">
    &copy; Carlos Daniel Hernandez Hernandez. Todos los derechos reservados.
  </footer>
  </div>
  `
})
export class AppComponent { }

// navbar.component.ts
