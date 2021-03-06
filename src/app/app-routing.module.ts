import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule,Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}