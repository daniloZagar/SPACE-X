import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LaunchesApiUrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const baseUrl = 'https://api.spacexdata.com/v3';
    const newReq = req.clone({ url: `${baseUrl}/${req.url}` });
    return next.handle(newReq);
  }
}
