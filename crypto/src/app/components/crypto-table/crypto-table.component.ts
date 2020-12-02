import { Component, OnInit } from '@angular/core';
import { Cryptocurrency } from 'src/app/models/cryptocurrency';
import { CoincapService } from 'src/app/services/coincap.service';

@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent implements OnInit {
  public cryptos : Cryptocurrency[] = [];

  public get currentCurrency() {
    return 'USD';
  }

  public priceToString(crypto: Cryptocurrency) : string{
    const currencyLabel = 'USD';
    return `${crypto.quote[this.currentCurrency].price} ${currencyLabel}`
  }

  constructor (private coincapService : CoincapService) { }

  ngOnInit(): void {
    this.coincapService.getTopCryptocurrencies().subscribe(resp => {
      this.cryptos = resp.data;
    })
  }

}
