import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from "src/app/components/components.module";
import { Userhome } from './userhome.component'

const routes = [
  {
    path: '',
    component: Userhome,
  },
]

@NgModule({
  declarations: [Userhome],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Userhome],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserhomeModule {}
