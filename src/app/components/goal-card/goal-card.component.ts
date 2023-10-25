import { Component, Input } from '@angular/core'

@Component({
  selector: 'goal-card',
  templateUrl: 'goal-card.component.html',
  styleUrls: ['goal-card.component.css'],
})
export class GoalCard {
  @Input()
  title: string = 'Lorem ipsum'
  @Input()
  rootClassName: string = ''
  @Input()
  action: string = 'SEE MORE'
  @Input()
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
  constructor() {}
}
