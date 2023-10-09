import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Injectable} from "@angular/core";
import { EMPTY, catchError} from "rxjs";
// import {error} from "@angular/compiler-cli/src/transformers/util";
// import { EMPTY, catchError} from "rxjs/operators";
// import {error} from "@angular/compiler-cli/src/transformers/util";
// import {EMPTY} from "rxjs/dist/types";

@Injectable()
export class ErrorInterceptor implements  HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // alert('error');
          return EMPTY;
        }
      )

      // .pipe(
      //   catchError((error: HttpErrorResponse) => {
      //       alert('error');
      //       return EMPTY;
      //     }
      //   )
      )
  }

}
