import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoalistComponent } from './pessoas/pessoalist/pessoalist.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';

const routes: Routes = [{ path: "", redirectTo: "login", pathMatch: 'full' },
{ path: "login", component: LoginComponent },
{
  path: "admin", component: IndexComponent, children: [
    { path: "pessoas", component: PessoalistComponent },
    { path: "pessoas/novo", component: PessoasdetailsComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
