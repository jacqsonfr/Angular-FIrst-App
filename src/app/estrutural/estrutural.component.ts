import { Component} from '@angular/core';

@Component({
  selector: 'app-estrutural',
  templateUrl: './estrutural.component.html',
  styleUrls: ['./estrutural.component.css']
})
export class EstruturalComponent  {

  exibir: boolean = true;
  condicao2: boolean = true;

  toggleShow(){
    this.exibir = !this.exibir;
  }
}
