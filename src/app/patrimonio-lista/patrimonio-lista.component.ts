import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatrimonioService } from '../patrimonio.service';
import { Patrimonio } from '../patrimonio/patrimonio';


@Component({
  selector: 'app-patrimonio-lista',
  templateUrl: './patrimonio-lista.component.html',
  styleUrls: ['./patrimonio-lista.component.css']
})
export class PatrimonioListaComponent implements OnInit {
  
  patrimonios: Patrimonio[] = [];
  patrimonioSelect!: Patrimonio;
  mensagemSucesso!: String;
  mensagemErro!: String;  

  constructor(
    private service: PatrimonioService, 
    private router: Router){}
  
  ngOnInit(): void {
    this.service
      .getPatrimonio()
      .subscribe(resposta => this.patrimonios = resposta)
  }

  novoCadastro(){
    this.router.navigate(['/patrimonio/form'])
  }

  deleteselect(patrimonio: Patrimonio){
    this.patrimonioSelect = patrimonio;
  }

  doDelete(){
    this.service
    .deletar(this.patrimonioSelect)
    .subscribe(response => {
      this.mensagemSucesso = 'Patrimônio deletado com sucesso!',
      this.ngOnInit();
    },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Patrimônio'
    )
  } 

}