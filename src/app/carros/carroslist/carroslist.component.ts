import { Component } from '@angular/core';
import { Carro } from '../carros';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
  lista: Carro[] = [];

  constructor() {
    let carro1 = new Carro();

    carro1.id = 1;
    carro1.marca = "Marca1";
    carro1.ano = 2000;

    let carro2 = new Carro();

    carro2.id = 2;
    carro2.marca = "Marca2";
    carro2.ano = 2001;

    let carro3 = new Carro();

    carro3.id = 3;
    carro3.marca = "Marca3";
    carro3.ano = 2002;

    let carro4 = new Carro();

    carro4.id = 4;
    carro4.marca = "Marca4";
    carro4.ano = 2003;

    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
    this.lista.push(carro4);
  }
}
