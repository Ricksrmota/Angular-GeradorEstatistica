export class Intervalo {
  nome: string;
  quantidade: number;
  frequenciaR: number;
  frequenciaAC: number;


  constructor(nome: string, quantidade: number, frequenciaR: number, frequenciaAC: number) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.frequenciaR = frequenciaR;
    this.frequenciaAC = frequenciaAC;
  }
}
