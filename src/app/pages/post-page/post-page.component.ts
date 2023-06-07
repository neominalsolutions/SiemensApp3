import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Posts } from '../models/posts';

@Component({
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  constructor(private postService: PostsService) {}

  ngOnDestroy(): void {
    this.subs.forEach((sb) => {
      sb.unsubscribe();
    });
  }

  posts: Posts[] = [];
  ngOnInit(): void {
    const sb = this.postService.getPosts().subscribe({
      next: (data: Posts[]) => {
        console.log('data', data);
        // try
        // işlem başarılı ise network hatası yoksa veriyi buradan yakalarız
        this.posts = [...data];
      },
      error: (err) => {
        // catch
        console.log('err', err);
      },
      complete() {
        // finally
        // hata olsa da olmasada burası çalışır.
      },
    });

    this.subs.push(sb);
  }
}
