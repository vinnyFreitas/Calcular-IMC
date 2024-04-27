import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  peso: number | undefined;
  altura: number | undefined;
  resultado: number = 0;

  constructor(private router: Router) { }
  calcularIMC() {
    if (this.peso !== undefined && this.altura !== undefined) {
      this.resultado = this.peso / (this.altura * this.altura);
      this.peso = undefined;
      this.altura = undefined;
    }

  }
  validarPeso() {
    if (this.peso === 0) {
      this.peso = undefined;
    }
  }

  validarAltura() {
    if (this.altura === 0) {
      this.altura = undefined;
    }
  }



  interpretarIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Você está abaixo do peso';
    } else if (imc < 25) {
      return ' Seu peso está normal';
    } else if (imc < 30) {
      return 'Você está acima do peso';
    } else {
      return 'Você está obeso';
    }


  }
}
