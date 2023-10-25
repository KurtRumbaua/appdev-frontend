import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'admin-record',
  templateUrl: 'admin-record.component.html',
  styleUrls: ['admin-record.component.css'],
})
export class AdminRecord {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('adminRecord - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'adminRecord - appdev-frontend',
      },
    ])
  }
}
