import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var Ionic: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setTimeout(() => {
        // 在下次启动APP时使用CrosswalkWebView内核后
        // Ionic.WebView.useCrosswalkWebViewAtTheNextStartup();
        // 在下次启动APP时使用SystemkWebView内核
        // Ionic.WebView.useSystemWebViewAtTheNextStartup();
        alert(window.navigator.userAgent);
      }, 2000);

    });
  }
}
