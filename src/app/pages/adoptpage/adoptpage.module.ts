import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from "src/app/components/components.module";
import { Adoptpage } from './adoptpage.component'

const routes = [
  {
    path: '',
    component: Adoptpage,
  },
]

@NgModule({
  declarations: [Adoptpage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Adoptpage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdoptpageModule {}
