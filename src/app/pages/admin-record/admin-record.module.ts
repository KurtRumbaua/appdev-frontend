import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from "src/app/components/components.module";
import { AdminRecord } from './admin-record.component'

const routes = [
  {
    path: '',
    component: AdminRecord,
  },
]

@NgModule({
  declarations: [AdminRecord],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AdminRecord],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminRecordModule {}
