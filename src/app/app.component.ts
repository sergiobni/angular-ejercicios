import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-reto-segundo';
  name = 'Sergio';

  nombre = '';
  apellido = '';

  edad = 30;
  email = 'rpablo@gmail.com';
  sueldos = [1000, 2000, 3000];
  activo = true;

  saludos = ['bon dia', 'bona vesprada', 'bona nit'];

  esActivo() {
    if (this.activo) return 'Trabajador activo';
    else return 'Trabajador Inactivo';
  }

  ultimos3sueldos() {
    let suma = 0;
    for (let i = 0; i < this.sueldos.length; i++) suma += this.sueldos[i];
    return suma;
  }

  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
  ///////////////////////////////////////
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string | undefined;

  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar(): void {
    this.valor1 = Math.trunc(Math.random() * 6) + 1;
    this.valor2 = Math.trunc(Math.random() * 6) + 1;
    this.valor3 = Math.trunc(Math.random() * 6) + 1;
    if (this.valor1 === this.valor2 && this.valor1 === this.valor3)
      this.resultado = 'Ganó';
    else this.resultado = 'Perdió';
  }
}
