import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public dados:any[] = null;
  constructor (private http:HTTP) {
    this.http.get('https://appdevap.000webhostapp.com/', {}, {})
    .then(res => {
      this.dados = res.data
      console.log(res.data)
    })
    .catch(error => console.log(error.error));
  }
}