import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { DogCard } from './dog-card/dog-card.component'
import { GoalCard } from './goal-card/goal-card.component'
import { DogCard1 } from './dog-card1/dog-card1.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'

@NgModule({
  declarations: [DogCard, GoalCard, DogCard1, NavigationLinks],
  imports: [CommonModule, RouterModule],
  exports: [DogCard, GoalCard, DogCard1, NavigationLinks],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
