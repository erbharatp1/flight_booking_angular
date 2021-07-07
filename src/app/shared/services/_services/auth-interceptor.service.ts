// import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// const TOKEN_HEADER_KEY = 'x-access-token';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthInterceptor implements HttpInterceptor {
 
//   intercept(req: HttpRequest, next: HttpHandler) {
    
//     if (token != null) {
//       authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
//     }
//     return next.handle(authReq);
//   }
// }