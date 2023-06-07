import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request Type:', request.method);
    console.log('Request Body:', request.body);
    console.log('Query Params:', request.params);

    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage =  error.error.message || error.error.error;
          }
          const errorResponse = {
            status: error.error.status,
            message: errorMessage,
            response : error.error.response,
            curlCommand: `curl -X ${request.method} ${request.urlWithParams} -H 'Content-Type: application/json' -d '${JSON.stringify(request.body)}'`
          };
          return throwError(errorResponse);
        })
      )
  }
}
