import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {

  @Input() rating: number = 0;
  @Output() onRatingChange = new EventEmitter<number>();

  onClick(i: number){
    this.onRatingChange.emit(i);
  }
}
