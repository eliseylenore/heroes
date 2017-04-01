import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component ({
  selector: `my-app`,
  template: `
  <h1>{{title}}</h1>
  <my-heroes></my-heroes>
  `,
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
