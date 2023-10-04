import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {
  
  roteador = inject (ActivatedRoute);
  pessoa!: pessoa;

  constructor (){
    let id = this.roteador.snapshot.paramMap.get('id');
    
    console.log(id);
  }
}
