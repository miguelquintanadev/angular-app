import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo Angular desde componente!';

  users: string[] = ['Pepe', 'Maria', 'Juan', 'Andres'];

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible? false : true;
    console.log('Hemos hecho clic en setVisible');
  }
}
