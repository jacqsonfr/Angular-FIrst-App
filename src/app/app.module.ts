import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { C1Component } from './c1.component';
import { C2Component } from './c2/c2.component';
import { CounterComponent } from './counter/counter.component';
import { EstruturalComponent } from './estrutural/estrutural.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MoviesComponent } from './movies/movies.component';
import { StarsComponent } from './stars/stars.component';
import { PanelComponent } from './panel/panel.component';
import { RefreshComponent } from './refresh/refresh.component';
import { Counter2Component } from './counter2/counter2.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    CounterComponent,
    EstruturalComponent,
    TodoListComponent,
    MoviesComponent,
    StarsComponent,
    PanelComponent,
    RefreshComponent,
    Counter2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
