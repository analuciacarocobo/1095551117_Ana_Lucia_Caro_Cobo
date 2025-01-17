import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

const routes: Routes = [
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'login', 
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
