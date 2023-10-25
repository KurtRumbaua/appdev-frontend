import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'adopt-info',
  templateUrl: 'adopt-info.component.html',
  styleUrls: ['adopt-info.component.css'],
})
export class AdoptInfo {
  raw7fuc: string = ' '
  rawrp47: string = ' '
  rawy798: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AdoptInfo - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AdoptInfo - appdev-frontend',
      },
    ])
  }
}
