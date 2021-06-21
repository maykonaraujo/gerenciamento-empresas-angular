import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { Empresa } from 'src/app/empresa/empresa';



@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrls: ['./create-empresa.component.css']
})
export class CreateEmpresaComponent implements OnInit {
  empresa: Empresa = new Empresa();
  submited = false;
  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
  }

  newEmpresa(): void{
    this.submited = false;
    this.empresa = new Empresa();
  }

  save(){
    this.empresaService.createEmpresa(this.empresa)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
      );
      this.empresa = new Empresa();
      this.goToList();
  }

  onSubmit(){
    this.submited = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/empresas']);
  }

}
