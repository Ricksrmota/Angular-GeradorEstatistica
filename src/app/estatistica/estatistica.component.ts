import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.css']
})
export class EstatisticaComponent implements OnInit {

  constructor() { }

  @Input()
  ValorE = new Array(10,10,10,15,30,45,50,35,60,80,90,90,90,95,94,96,80,17,13,20,55,57,56,42,30,35,27,100,54,27);
  

  ordenado = this.ValorE.sort(function(a, b){return a-b;});
  n = this.ValorE.length; //Pega o tamanho do Array
  maior = Math.max.apply(null, this.ValorE );
  menor = Math.min.apply(null, this.ValorE );
  inter = Math.log10(this.n) * 3.22 + 1;
  interRedondo =Math.round(this.inter); //Quantidade de intervalo que irá ter
  AT = this.maior - this.menor;
  h = this.AT / this.interRedondo; // Intervalo das classe
  intervaloMin = this.menor;
  interValoMaximo = null;
  intervalos = [];
  total = null;
  c = 0;
  
 intervaloClasse(){
    for (var _i = 0; _i < this.interRedondo; _i++) //For de intervalos
    {         
      this.interValoMaximo = this.intervaloMin + this.h;   //por um for dentro desse pra contar os valores que estão dentro de Min e MAX e jogar dentro de um array
      const d = this.intervaloMin +" |-- "+this.interValoMaximo;
      this.intervaloMin = this.interValoMaximo;
      this.intervalos.push(d);     
    }

    for (var _i = 0; _i < this.n; _i++) //soma o total
    {
      
      this.total =this.ValorE[this.c]+this.total;
      this.c = this.c+1;
    }
    
 }
 
  ngOnInit() {
   this.intervaloClasse();
  }

}
