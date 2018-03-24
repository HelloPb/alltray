import { environment } from '../../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HostInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let host;

    const regex = new RegExp(/^api\//);

    if (regex.test(req.url)) {
      host = req.clone({ url: `${environment.apiUrl}/${req.url}`});
    }

    return next.handle(host);
  }
}
