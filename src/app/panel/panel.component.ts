import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  {

@Input() title:string = '';

expanded = true;

expand(){
  this.expanded = true;
}

contract(){
  this.expanded = false;
}

}
