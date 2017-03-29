import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES : Hero[] = [
  { id: 1, name: 'ChrisBor'},
  { id: 2, name: 'Mousey'},
  { id: 3, name: 'Eliseybob'},
  { id: 4, name: 'Gwenny Penny'},
  { id: 5, name: 'Smart Alec'},
  { id: 6, name: 'Carlo'},
  { id: 7, name: 'Tare Bear'},
  { id: 8, name: 'Gabey Babie'},
  { id: 9, name: 'Janinja'},
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <h2>{{hero.name}} details!</h2>
  <div>
    <label>id: </label>{{hero.id}}
  </div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `,
})



export class AppComponent  {
  title = 'Tour of Heroes';
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
