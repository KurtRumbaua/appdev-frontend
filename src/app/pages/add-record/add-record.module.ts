import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from 'src/app/components/components.module'
import { AddRecord } from './add-record.component'

const routes = [
  {
    path: '',
    component: AddRecord,
  },
]

@NgModule({
  declarations: [AddRecord],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AddRecord],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddRecordModule {}
