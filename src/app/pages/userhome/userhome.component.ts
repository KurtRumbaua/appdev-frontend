import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-userhome',
  templateUrl: 'userhome.component.html',
  styleUrls: ['userhome.component.css'],
})
export class Userhome {
  rawtlgj: string = ' '
  rawswvo: string = ' '
  raw39qm: string = ' '
  raw1y4i: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'appdev-frontend',
      },
    ])
  }
}
