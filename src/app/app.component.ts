import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title: string = 'Hola mundo Angular desde componente!';

  subTitle = 'Contador con estado de sesión';

  users: string[] = ['Pepe', 'Maria', 'Juan', 'Andres'];

  visible: boolean = false;

  counter: number = 0;

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  }

  setVisible(): void {
    this.visible = this.visible? false : true;
    console.log('Hemos hecho clic en setVisible');
  }

  setCounter(counter:number):void {
    this.counter = counter;
  }
}
