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
    <li *ngFor="let hero of heroes"
    (click)="onSelect(hero)"
    [class.selected]="hero===selectedHero">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div>
      <label>id: </label>{{selectedHero.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name">
    </div>
  </div>
  `,
})



export class AppComponent  {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
