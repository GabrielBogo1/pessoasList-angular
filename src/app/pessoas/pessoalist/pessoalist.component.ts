import { Component } from '@angular/core';
import { pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {
  lista: pessoa [] = [];

  constructor (){
    let pessoa1: pessoa = new pessoa();

    pessoa1.nome = "PessoaTeste1";
    pessoa1.idade = 20;

    let pessoa2: pessoa = new pessoa();
    pessoa2.nome = "PessoaTeste2";
    pessoa2.idade = 30;

    let pessoa3: pessoa = new pessoa();
    pessoa3.nome = "PessoaTeste3";
    pessoa3.idade = 40;

    let pessoa4: pessoa = new pessoa();
    pessoa4.nome = "PessoaTeste4";
    pessoa4.idade = 50;

    let pessoa5: pessoa = new pessoa();
    pessoa5.nome = "PessoaTeste5";
    pessoa5.idade = 60;


    let pessoa6: pessoa = new pessoa();
    pessoa6.nome = "PessoaTeste6";
    pessoa6.idade = 70;


    let pessoa7: pessoa = new pessoa();
    pessoa7.nome = "PessoaTeste7";
    pessoa7.idade = 80;

    let pessoa8: pessoa = new pessoa();
    pessoa8.nome = "PessoaTeste8";
    pessoa8.idade = 90;

    let pessoa9: pessoa = new pessoa();
    pessoa9.nome = "PessoaTeste9";
    pessoa9.idade = 100;

    let pessoa10: pessoa = new pessoa();
    pessoa10.nome = "PessoaTeste10";
    pessoa10.idade = 1100;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
  }
}
