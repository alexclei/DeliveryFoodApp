import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public lista:Array<any>;
  constructor (private http:Http) {
    this.http.get('http://localhost/delivery/apirest/public/api/lugar').subscribe(
      data => {
        let dados = (data as any)
        dados = JSON.parse(dados._body)
        this.lista = dados
        console.log(this.lista)
      },
      error => {
        console.log(error)
      }
    )
  }
}