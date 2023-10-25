import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'add-record',
  templateUrl: 'add-record.component.html',
  styleUrls: ['add-record.component.css'],
})
export class AddRecord {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('addRecord - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'addRecord - appdev-frontend',
      },
    ])
  }
}
