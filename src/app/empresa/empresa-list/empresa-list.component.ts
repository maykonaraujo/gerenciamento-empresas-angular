import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EmpresaDetailsComponent } from 'src/app/empresa/empresa-details/empresa-details.component';
import { Observable } from 'rxjs';
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { Empresa } from 'src/app/empresa/empresa';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {
  empresas: Observable<Empresa[]>;

  constructor(private empresaService: EmpresaService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.empresas = this.empresaService.getEmpresaList();
  }

  deletaEmpresa(id : number) {
      this.empresaService.deleteEmpresa(id)
      .subscribe(
        data => {
          console.log(data)
          this.reloadData();
        },
        error => console.log(error)
        
      );
  }

  empresaDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmpresa(id: number){
    this.router.navigate(['update',id]);

  }

}
