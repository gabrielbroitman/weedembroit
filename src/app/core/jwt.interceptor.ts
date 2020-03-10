import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, from, throwError } from 'rxjs';
import { Storage } from '@ionic/storage';
import { UserService } from './services/user.service';
import { AlertController } from '@ionic/angular';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    public headers: HttpHeaders;


   
    constructor(private alertController: AlertController, private storage: Storage) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // YOU CAN ALSO DO THIS
        // const token = this.authenticationService.getToke()

        return from(this.storage.get('token'))
            .pipe(
                switchMap(token => {
                    console.log(token);
                    if (token) {
                        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
                    }

                    if (!request.headers.has('Content-Type')) {
                        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                    }


                    return next.handle(request).pipe(
                        map((event: HttpEvent<any>) => {
                            if (event instanceof HttpResponse) {
                                // do nothing for now
                            }
                            console.log(event);
                            console.log(request);
                            return event;
                        }),
                        catchError((error: HttpErrorResponse) => {
                            const status =  error.status;
                            const reason = error && error.error.reason ? error.error.reason : '';

                            return throwError(error);
                        })
                    );
                })
            );


    }

    async presentAlert(status, reason) {
        // const alert = await this.alertController.create({
        //     header: status + ' Error',
        //     subHeader: 'Subtitle',
        //     message: reason,
        //     buttons: ['OK']
        // });

        // await alert.present();
    }
}