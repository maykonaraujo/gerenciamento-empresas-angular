import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpresaComponent } from './empresa/create-empresa/create-empresa.component';
import { EmpresaDetailsComponent } from './empresa/empresa-details/empresa-details.component';
import { EmpresaListComponent } from './empresa/empresa-list/empresa-list.component';
import { UpdateEmpresaComponent } from './empresa/update-empresa/update-empresa.component';

const routes: Routes = [
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: 'empresas', component: EmpresaListComponent },
  { path: 'add', component: CreateEmpresaComponent },
  { path: 'update/:id', component: UpdateEmpresaComponent },
  { path: 'details/:id', component: EmpresaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
