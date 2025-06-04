import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
             imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  name: string = 'Eugene Medvedev';
  age: number = 54;
  description: string = 'A professional developer';
}
