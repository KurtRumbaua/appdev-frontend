import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from "src/app/components/components.module";
import { AdoptInfo } from './adopt-info.component'

const routes = [
  {
    path: '',
    component: AdoptInfo,
  },
]

@NgModule({
  declarations: [AdoptInfo],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AdoptInfo],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdoptInfoModule {}
