import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from "src/app/components/components.module";
import { UpdateRecord } from './update-record.component'

const routes = [
  {
    path: '',
    component: UpdateRecord,
  },
]

@NgModule({
  declarations: [UpdateRecord],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [UpdateRecord],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UpdateRecordModule {}
