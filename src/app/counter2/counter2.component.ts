import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit, OnChanges {

  @Input() label:string = '';
  @Input() max:number = 0;
  counter:number = 0;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes: '+JSON.stringify(changes));    
  }

  incrementar(){
    this.counter++;
  }
  
}
