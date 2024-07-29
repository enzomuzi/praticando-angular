// produtos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  protected UrlServiceV1: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.UrlServiceV1 + 'produtos');
  }
}
