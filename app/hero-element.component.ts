import { Component, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'hero-element',
  templateUrl: 'hero-element.component.html'
})
export class HeroElement {
  @Input() hero;
}