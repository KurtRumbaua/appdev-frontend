import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-adoptpage',
  templateUrl: 'adoptpage.component.html',
  styleUrls: ['adoptpage.component.css'],
})
export class Adoptpage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Adoptpage - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Adoptpage - appdev-frontend',
      },
    ])
  }
}
