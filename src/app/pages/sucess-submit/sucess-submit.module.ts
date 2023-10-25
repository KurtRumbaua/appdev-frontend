import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from "src/app/components/components.module";
import { SucessSubmit } from './sucess-submit.component'

const routes = [
  {
    path: '',
    component: SucessSubmit,
  },
]

@NgModule({
  declarations: [SucessSubmit],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SucessSubmit],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SucessSubmitModule {}
