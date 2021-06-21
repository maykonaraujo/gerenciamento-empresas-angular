import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { Empresa } from 'src/app/empresa/empresa';

@Component({
  selector: 'app-update-empresa',
  templateUrl: './update-empresa.component.html',
  styleUrls: ['./update-empresa.component.css']
})
export class UpdateEmpresaComponent implements OnInit {
  id:number;
  empresa: Empresa;
  submited = false; 

  constructor(private route: ActivatedRoute, private router: Router, private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresa = new Empresa();
    this.id = this.route.snapshot.params['id'];

    this.empresaService.getEmpresa(this.id)
    .subscribe(
      data => {
        console.log(data);
        this.empresa = data;
      },
      error=> console.log(error)
    )
  }

  updateEmpresa(){
    this.empresaService.updateEmpresa(this.id, this.empresa)
    .subscribe(data=>console.log(data), error=> console.log(error));
    this.empresa = new Empresa();
    this.goToList();
  }

  onSubmit(){
    this.updateEmpresa();
  }

  goToList(){
    this.router.navigate(['/empresas']);
  }


}
