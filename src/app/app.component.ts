import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { TestePage } from '../pages/teste/teste';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages : Array<{ title:string, component:any, icon:string }>;
  rootPage = HomePage;

  constructor(platform: Platform) {
    this.pages = [
      { title:"Home",component:HomePage, icon: "menu" },
      { title:"My Feed Reader",component:TestePage, icon: "menu" }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page:any) {
    this.rootPage = page.component;
  }

}
