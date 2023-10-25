import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'admindog-info',
  templateUrl: 'admindog-info.component.html',
  styleUrls: ['admindog-info.component.css'],
})
export class AdmindogInfo {
  rawrst2: string = ' '
  rawv3wh: string = ' '
  raw9ki5: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('admindogInfo - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'admindogInfo - appdev-frontend',
      },
    ])
  }
}
