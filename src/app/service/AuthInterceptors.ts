import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
    providedIn: 'root'
  })

export  class AuthInterceptors implements HttpInterceptor{
    intercept(req: import("@angular/common/http").HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        // debugger;
        let token=sessionStorage.getItem('currentUserToken');
        if(token){
         const cloned=req.clone({headers:req.headers.set("Authorization","Bearer "+token)});
         return next.handle(cloned);
        }
        else{
            return next.handle(req);
        }
    }



}