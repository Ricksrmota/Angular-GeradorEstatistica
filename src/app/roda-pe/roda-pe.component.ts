import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roda-pe',
  templateUrl: './roda-pe.component.html',
  styleUrls: ['./roda-pe.component.css']
})
export class RodaPeComponent implements OnInit {

  versaoMaiorControler: number=100;  
  versaoFunciControler: number=0;  
  versaoMenorControler: number=0;

  constructor() { }

  ngOnInit() {
  }

}
