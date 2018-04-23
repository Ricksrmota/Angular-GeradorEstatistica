import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common/src/directives';

@Component({
  selector: 'app-apresentadorversao',
  templateUrl: './apresentadorversao.component.html',
  styleUrls: ['./apresentadorversao.component.css']
})
export class ApresentadorversaoComponent implements OnInit {

  constructor() { }

  @Input()
  versaoMaior: number=null;

  @Input()
  versaoFunci: number=null;
  
  @Input()
  versaoMenor: number=null;

  versao_comeplta = null;
  
  nsg = null;
  ngOnInit() {
    if(this.versaoMaior <1 || this.versaoMaior >10 || this.versaoFunci <1 || this.versaoFunci>10 || this.versaoMenor <0 || this.versaoMenor >100)
    {
     this.nsg = true
    }
    else{
      this.versao_comeplta = this.versaoMaior +"." + this.versaoFunci + "." + this.versaoMenor
    }
    
  }

}
