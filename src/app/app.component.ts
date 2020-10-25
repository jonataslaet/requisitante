import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
    this.http.get(`${this.apiUrl}/produtos`).subscribe (
      resultado => console.log(resultado)
    );
  }

  listarProdutoPorId(){
    this.http.get(`${this.apiUrl}/produtos/4`).subscribe(
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
    var produto = { nome : "" };

    this.http.post(`${this.apiUrl}/produtos`,produto).subscribe(
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
}
