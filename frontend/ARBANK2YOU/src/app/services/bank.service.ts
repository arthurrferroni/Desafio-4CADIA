import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = 'bank/';
@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private httpClient:HttpClient) { }

  getAllBanks() {
    return this.httpClient.get(environment.apiUrl + baseUrl + 'listAll');
  }
}
