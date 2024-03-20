import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoClimaService {

  private apiKey = 'fea4e56ba06cd5574521ac71ad00a33c'; 

  constructor(private http: HttpClient) { }

  getInformacoesClima(cidade: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}

