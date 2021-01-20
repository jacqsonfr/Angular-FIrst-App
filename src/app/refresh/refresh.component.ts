import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit, OnDestroy {

  @Input() id:number = 0;  
  interval!: NodeJS.Timeout;

  constructor() { }

  
  ngOnInit(): void {
    this.interval = setInterval(() =>{
      console.log(`Componente #${this.id} refresh`);
      
    }, 2000)
  }
  
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
