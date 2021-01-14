import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  newTask: string = '';
  tasks: string[] =[
    'Arrumar a cama',
    'Fazer o trabalho prático do Bootcamp'
  ]

  tasks2: TodoItem[] =[
    {description:'Arrumar a cama', done:true},
    {description:'Fazer o trabalho prático do Bootcamp', done:false}
  ]


  addTask(){        
    this.tasks2.push({
      description:this.newTask,
      done:false
    });
  }

  delTask(index: number){    
    this.tasks2.splice(index,1);
  }

}
