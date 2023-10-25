import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from "src/app/components/components.module";
import { Adoptsignup } from './adoptsignup.component'

const routes = [
  {
    path: '',
    component: Adoptsignup,
  },
]

@NgModule({
  declarations: [Adoptsignup],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Adoptsignup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdoptsignupModule {}
