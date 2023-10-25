import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from "src/app/components/components.module";
import { DeleteRecord } from './delete-record.component'

const routes = [
  {
    path: '',
    component: DeleteRecord,
  },
]

@NgModule({
  declarations: [DeleteRecord],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DeleteRecord],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeleteRecordModule {}
