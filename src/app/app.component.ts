import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produto } from './model/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'requisitante';
  readonly apiUrl : string;

  constructor(private http : HttpClient){
    this.apiUrl = 'http://localhost:8080';
  }

  listarTodosProdutos(){
    this.http.get<Produto[]>(`${this.apiUrl}/produtos`).subscribe (
      resultado => console.log(resultado)
    );
  }

  listarProdutoPorId(){
    this.http.get<Produto>(`${this.apiUrl}/produtos/4`).subscribe(
      resultado => {
        console.log(resultado);
      },
      erro => {
        if (erro.status == 404){
          console.log(erro.error);
        }
      }
    );
  }

  adicionarProduto(){
    var produto = new Produto();
    produto.id = 4;
    produto.nome = "TV 52 Polegados";

    this.http.post<Produto>(`${this.apiUrl}/produtos`,produto).subscribe(
      resultado => {
        console.log(resultado);
      },
      erro => {
        if (erro.status == 400){
          console.log(erro.error);
        }
      }
    );
  }

  alterarProduto(){
    var produto = new produto();
    produto.id = 1;
    produto.nome = "TV 53 Polegados";

    this.http.put(`${this.apiUrl}/produtos/1`, produto).subscribe (
      resultado => {
        console.log("Produto alterado com sucesso");
      },
      erro => {
        if (erro.status == 404) {
          console.log(erro.error);
        }
      }
    );
  }

  excluirProduto(){
    this.http.delete(`${this.apiUrl}/produtos/4`).subscribe(
      resultado => {
        console.log("Produto deletado com sucesso");
      },
      erro => {
        if (erro.status == 404) {
          console.log(erro.error);
        }
      }
    );
  }
}
