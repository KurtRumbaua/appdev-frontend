import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'adoptsignup',
    loadChildren: () =>
      import('./pages/adoptsignup/adoptsignup.module').then(
        (m) => m.AdoptsignupModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/userhome/userhome.module').then((m) => m.UserhomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'adopt-info',
    loadChildren: () =>
      import('./pages/adopt-info/adopt-info.module').then(
        (m) => m.AdoptInfoModule
      ),
  },
  {
    path: 'update-record',
    loadChildren: () =>
      import('./pages/update-record/update-record.module').then(
        (m) => m.UpdateRecordModule
      ),
  },
  {
    path: 'sucess-submit',
    loadChildren: () =>
      import('./pages/sucess-submit/sucess-submit.module').then(
        (m) => m.SucessSubmitModule
      ),
  },
  {
    path: 'delete-record',
    loadChildren: () =>
      import('./pages/delete-record/delete-record.module').then(
        (m) => m.DeleteRecordModule
      ),
  },
  {
    path: 'admin-record',
    loadChildren: () =>
      import('./pages/admin-record/admin-record.module').then(
        (m) => m.AdminRecordModule
      ),
  },
  {
    path: 'add-record',
    loadChildren: () =>
      import('./pages/add-record/add-record.module').then(
        (m) => m.AddRecordModule
      ),
  },
  {
    path: 'adoptpage',
    loadChildren: () =>
      import('./pages/adoptpage/adoptpage.module').then(
        (m) => m.AdoptpageModule
      ),
  },
  {
    path: 'admindog-info',
    loadChildren: () =>
      import('./pages/admindog-info/admindog-info.module').then(
        (m) => m.AdmindogInfoModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
