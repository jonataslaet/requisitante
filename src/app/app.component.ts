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
}
