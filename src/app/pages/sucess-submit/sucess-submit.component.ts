import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sucess-submit',
  templateUrl: 'sucess-submit.component.html',
  styleUrls: ['sucess-submit.component.css'],
})
export class SucessSubmit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('sucessSubmit - appdev-frontend')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'sucessSubmit - appdev-frontend',
      },
    ])
  }
}
