import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './core/services/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  user;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private nav: NavController,
    private statusBar: StatusBar,
    private authService: UserService,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.authService.getUser().then(res => {
      this.user = res;
    })

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        if (!this.user && event.url !== '/login') {
          this.authService.getUser().then(res => {
            this.user = res;
          })
        }

      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#1a75bb');
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authService.logout();
    this.nav.navigateRoot('login');

  }


  public appPages = [
    {
      title: 'Sobre a Missão do Bem',
      url: '/about',
      icon: 'mail'
    },  {
      title: 'Video de apresentação',
      url: '/',
      icon: 'mail'
    },
    {
      title: 'Campanhas',
      url: '/campaigns',
      icon: 'paper-plane'
    },

    {
      title: 'Minhas campanhas',
      url: '/my-campaigns',
      icon: 'people'
    },
    {
      title: 'Meu perfil',
      url: '/profile',
      icon: 'settings'
    },
    {
      title: 'Mensagens',
      url: '/configuracoes',
      icon: 'settings'
    },
    {
      title: 'Contato',
      url: '/contact',
      icon: 'settings'
    }

  ];

  public appPagesLoggedOut = [
    {
      title: 'Sobre a Missão do Bem',
      url: '/about',
      icon: 'mail'
    },  {
      title: 'Video de apresentação',
      url: '/welcome',
      icon: 'mail'
    },
    {
      title: 'Campanhas',
      url: '/campaigns',
      icon: 'paper-plane'
    },
    {
      title: 'Quero receber doações',
      url: '/categories',
      icon: 'mail'
    },
    {
      title: 'Contato',
      url: '/contact',
      icon: 'settings'
    }

  ];


  public selectedIndex = 0;


}
