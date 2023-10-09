import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Injectable} from "@angular/core";
// import { EMPTY, catchError} from "rxjs";
// import {error} from "@angular/compiler-cli/src/transformers/util";
// import { EMPTY, catchError} from "rxjs/operators";
// import {error} from "@angular/compiler-cli/src/transformers/util";
// import {EMPTY} from "rxjs/dist/types";

@Injectable()
export class AuthInterceptor implements  HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = '1232132313';
    const authReq = req.clone({
      // headers: req.headers.set('Authorization', authToken)
      headers: req.headers.set('Milk', authToken)
    })
    return next.handle(authReq);



      // .pipe(
      //   catchError((error: HttpErrorResponse) => {
      //       alert('error');
      //       return EMPTY;
      //     }
      //   )
      // )
  }

}
