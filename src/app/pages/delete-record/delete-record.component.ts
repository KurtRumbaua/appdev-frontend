import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'delete-record',
  templateUrl: 'delete-record.component.html',
  styleUrls: ['delete-record.component.css'],
})
export class DeleteRecord {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('deleteRecord - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'deleteRecord - appdev-frontend',
      },
    ])
  }
}
