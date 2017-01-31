import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html'
})
export class TestePage {

  public feeds: Array<string>;
  private url: string = "https://www.reddit.com/new.json";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {

    this.fetchContent();
  }

  fetchContent ():void {
    let loading = this.loadingCtrl.create({
      content: 'Buscando conteúdo...' //'Fetching content...'
    });

    loading.present();

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.data.children;
        loading.dismiss();
      });
  }

}
