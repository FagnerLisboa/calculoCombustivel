import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {
  public gasolina!: 7.99;
  public etanol!: 5.49;
  vantagem!:string;

  constructor() { }

  ngOnInit(): void {

  }

  calcular() {

    console.log(this.vantagem);

    if (this.gasolina > 0.7 * this.etanol) {
      this.vantagem = 'Vale mais a pena usar Gasolina';

    } else {
      this.vantagem = 'Vale mais a pena usar Álcool!';
    }
  }

}
