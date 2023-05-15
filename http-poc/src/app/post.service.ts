import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
   errorSubject = new Subject<string>();
    constructor(private http: HttpClient) {}

    onCreatePost(title: string, content: string) {
        const postData: Post = {title, content};
        this.http
        .post<{name: string}>(
          'https://fir-e5511-default-rtdb.firebaseio.com/posts.json',
          postData,
          {
            observe:'response'
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        }, error=>{
          this.errorSubject.next(error.message);
        });
    }

    getAllPosts() {
      let params = new HttpParams();
      params = params.set('print','pretty');
      params = params.set('custom','key');
        return this.http
        .get<Post>(
          'https://fir-e5511-default-rtdb.firebaseio.com/posts.json',
          {
            headers : new HttpHeaders({
              "Custom-Header" : "Hello"
            }),
            params: params
          }
        )
        .pipe(map( (responseData) => {
          const resultArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              resultArray.push({...responseData[key], id : key});
            }
          }
          return resultArray;
        }),
        catchError(errRes=> {
          return throwError(errRes);
        }))
    }

    clearPosts(){
      return this.http
        .delete(
          'https://fir-e5511-default-rtdb.firebaseio.com/posts.json',{
            observe:'events',
            responseType:'json'
          }
        ).pipe(
          tap(
            event=>{
              console.log(event);
              if(event.type === HttpEventType.Sent){

              }
              if(event.type === HttpEventType.Response){

              }
            }
          )
        );
    }
}
