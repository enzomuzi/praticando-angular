// lista-produtos.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  public produtos: Produto[] = [];

  private produtoService = inject(ProdutoService);

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }
}
