import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  errorSub : Subscription;
  constructor(private http: HttpClient, private postService: PostService) {}
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  ngOnInit() {
    this.errorSub = this.postService.errorSubject.subscribe(
      data => {
        this.error = data;
      }
    );
    this.fetchPost();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.onCreatePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPosts().subscribe( responceData =>{
      this.loadedPosts = [];
    }, error =>{
      this.error = error.message;
     });

  }

  fetchPost() {
    this.isFetching = true;
    this.postService.getAllPosts().subscribe(responseData => {
      this.isFetching = false;
      this.loadedPosts = responseData;
   }, error =>{
    this.error = error.message;
   });
  }
}
