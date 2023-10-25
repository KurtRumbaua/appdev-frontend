import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-adoptsignup',
  templateUrl: 'adoptsignup.component.html',
  styleUrls: ['adoptsignup.component.css'],
})
export class Adoptsignup {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Adoptsignup - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Adoptsignup - appdev-frontend',
      },
    ])
  }
}
