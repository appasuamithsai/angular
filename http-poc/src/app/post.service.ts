import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {
    constructor(private http: HttpClient) {}

    onCreatePost(title: string, content: string) {
        const postData: Post = {title, content};
        this.http
        .post<{name: string}>(
          'https://fir-e5511-default-rtdb.firebaseio.com/posts.json',
          postData
        )
        .subscribe(responseData => {
          console.log(responseData);
        });
    }

    getAllPosts() {
        return this.http
        .get<Post>(
          'https://fir-e5511-default-rtdb.firebaseio.com/posts.json'
        )
        .pipe(map( (responseData) => {
          const resultArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              resultArray.push({...responseData[key], id : key});
            }
          }
          return resultArray;
        }));
    }
}
