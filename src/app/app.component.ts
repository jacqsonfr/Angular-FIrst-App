import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minha-app';
  label = '';
  status =  false;

  changeStatus(newStatus:boolean){
    this.status = !this.status;
  }


  ids: number[] = [];
  lastID: number = 0;

  add(){
    this.lastID++;
    this.ids.push(this.lastID);
  }

  delete(id:number){
    this.ids.splice(this.ids.indexOf(id), 1);
  }
}
