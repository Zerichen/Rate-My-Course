import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ title }}</h1>
  <router-outlet></router-outlet>
  `,
  styles: [`
    $font-stack:    Helvetica, sans-serif;
    $primary-color: #333;
    
    body {
      font: 100% $font-stack;
      color: $primary-color;
    }
  `]
})

export class AppComponent {
  title = 'Rate My Course';
}
