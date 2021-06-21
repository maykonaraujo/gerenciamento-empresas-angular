import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmpresaComponent } from './empresa/create-empresa/create-empresa.component';
import { EmpresaDetailsComponent } from './empresa/empresa-details/empresa-details.component';
import { UpdateEmpresaComponent } from './empresa/update-empresa/update-empresa.component';
import { EmpresaListComponent } from './empresa/empresa-list/empresa-list.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmpresaComponent,
    EmpresaDetailsComponent,
    UpdateEmpresaComponent,
    EmpresaListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
