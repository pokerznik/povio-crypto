import { Component } from '@angular/core';
import { CoincapService } from './services/coincap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crypto';

  constructor(coincap: CoincapService) {
    coincap.getTopCryptocurrencies().subscribe(resp => {
      console.log(resp);
    });
  }
}
