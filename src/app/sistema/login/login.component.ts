import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor() {
    let usuario = new Usuario();

    usuario.login = "teste";
    usuario.senha = "senha123"

    let estaLogado = false;

  }
}
