import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.onCreatePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
   
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPost() {
    this.isFetching = true;
    this.postService.getAllPosts().subscribe(responseData => {
      this.isFetching = false;
      this.loadedPosts = responseData;
   });
  }
}
