import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { BrMaskerModule } from 'br-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guards/auth.guard';
import { SharedModule } from './shared/shared.module';

import localePtBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { JwtInterceptor } from './core/jwt.interceptor';

registerLocaleData(localePtBr);

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		BrMaskerModule,
		IonicStorageModule.forRoot(),
		CoreModule,
		SharedModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		File,
		Camera,
		AuthGuard,
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: LOCALE_ID, useValue: 'pt-BR' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
