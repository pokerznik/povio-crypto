import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Cryptocurrency } from '../models/cryptocurrency';
import { TopCryptocurrencyResponse } from '../models/top-cryptocurrency-response';

@Injectable({
  providedIn: 'root'
})
export class CoincapService {
  private get proxyUrl() {
    return `${this.localBaseUrl}/api`;
  }

  private get localBaseUrl() {
    return `${window.location.origin}`;
  }

  constructor (private client: HttpClient) { }

  private getHeader() {
    return new HttpHeaders({'X-CMC_PRO_API_KEY': environment.coincapApiKey});
  }

  public getTopCryptocurrencies() : Observable<TopCryptocurrencyResponse> {
    return this.client
      .get<TopCryptocurrencyResponse>(this.proxyUrl, {
        headers: this.getHeader()
      });
  }
}
