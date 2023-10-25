import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'update-record',
  templateUrl: 'update-record.component.html',
  styleUrls: ['update-record.component.css'],
})
export class UpdateRecord {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('updateRecord - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'updateRecord - appdev-frontend',
      },
    ])
  }
}
