import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  Adopt: string = 'Pricing'
  @Input()
  text4: string = 'Blog'
  @Input()
  text: string = 'About'
  @Input()
  text1: string = 'Features'
  @Input()
  text3: string = 'Team'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
