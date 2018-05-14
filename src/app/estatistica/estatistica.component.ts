import { Component, OnInit, Input } from '@angular/core';
import {Intervalo} from './intervalo.model';

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
  interValoMaximo = this.intervaloMin;
  contInter = [];
  intervalos2 = [];
  c = 0;
  valor=null;
  contadorFI = 0;
  frequenciaRE = 0;
  frequenciaAC =0;
  total = null;
  
 intervaloClasse(){
  
    

    for (var _i = 0; _i < this.interRedondo; _i++) //For de intervalos
    {         
      this.interValoMaximo = this.interValoMaximo+this.h;   //por um for dentro desse pra contar os valores que estão dentro de Min e MAX e jogar dentro de um array
      this.valor = this.intervaloMin +" |-- "+this.interValoMaximo; //insere no Array o intervalo
      
      
        for (var _x = 0; _x < this.ValorE.length; _x++)
        {
          if(this.ValorE[this.c] >= this.intervaloMin && this.ValorE[this.c] <this.interValoMaximo)
          {
           this.contadorFI = this.contadorFI+1;
           this.total = this.total+1;
          }
          this.c = this.c+1;
        }
      
      this.intervaloMin = this.interValoMaximo;
      this.frequenciaRE = (this.contadorFI/(this.n-1))*100;
      this.frequenciaAC =this.frequenciaRE+this.frequenciaAC;  
      const z = new Intervalo(this.valor, this.contadorFI, this.frequenciaRE,this.frequenciaAC);
      this.intervalos2.push(z);
      this.contadorFI=0;
      this.c=0;  
    }

 }
 
  ngOnInit() {
   this.intervaloClasse();
  }

}
