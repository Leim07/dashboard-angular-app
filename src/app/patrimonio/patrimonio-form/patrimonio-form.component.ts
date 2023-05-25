import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Patrimonio } from '../patrimonio';
import { PatrimonioService } from 'src/app/patrimonio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patrimonio-form',
  templateUrl: './patrimonio-form.component.html',
  styleUrls: ['./patrimonio-form.component.css']
})
export class PatrimonioFormComponent implements OnInit{

  patrimonio!: Patrimonio;
  success: boolean = false;
  errors!: String[];
  Observable: any;
  id: any;

  constructor(
    private service: PatrimonioService,
    private router: Router,
    private activatedRoute: ActivatedRoute){
    this.patrimonio = new Patrimonio();
  }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service
        .getPatrimonioById(this.id).subscribe(
          (response: Patrimonio) => {
            return this.patrimonio = response;
          } 
          //errorResponse = this.cliente = new Cliente()
        )
      }      
    })
       
  }

  onSubmit(){
    this.patrimonio.valor = this.patrimonio.valor.replace(',', '.');

    if(this.id){
      
      this.service
      .atualizar(this.patrimonio)
      .subscribe(response =>{
        this.success = true;
      }, errorResponse => {
        this.errors = ["Erro ao atualizar o patrimônio"]
      }
      )
      

    }else{

      this.service
    .salvar(this.patrimonio)
    .subscribe(response => {
      this.success = true;
      this.errors = [];
      this.patrimonio = response;
      this.resetForm();
    }, errorResponse =>{
      this.errors = errorResponse.error.errors;  
      this.success = false;    
    }
    )

    }

    
  }

  doVoltar(){
    this.router.navigate(['/patrimonio/lista'])
  }

  resetForm() {
    this.patrimonio = new Patrimonio();
  }

}
