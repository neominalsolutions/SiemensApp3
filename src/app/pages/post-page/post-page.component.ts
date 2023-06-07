import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription, forkJoin, switchMap } from 'rxjs';
import { Posts } from '../models/posts';
import { ActivatedRoute } from '@angular/router';
import { CounterStateService } from '../_states/counter-state.service';

@Component({
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  onIncrementByValue(inpRef: HTMLInputElement) {
    this.cs.IncrementByValue(Number(inpRef.value));
  }
  onDecrement() {
    this.cs.Decrement();
  }
  onIncrement() {
    this.cs.Increment();
  }

  private subs: Subscription[] = [];

  constructor(
    private postService: PostsService,
    private ac: ActivatedRoute,
    private cs: CounterStateService
  ) {}

  ngOnDestroy(): void {
    this.subs.forEach((sb) => {
      sb.unsubscribe();
    });
  }

  sb1!: Subscription;

  loadData() {
    this.postService.getPosts().subscribe({
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

    // this.postService.getPostById(1).subscribe((data2) => {
    //   console.log('data2', data2);
    //   console.log('this.posts', this.posts);
    // });

    // promise chain servisin bitiminde diğer servisi bağlayıp servis çağırısını sıralı senkton hale getirme kodu
    // this.postService
    //   .getPostById(1)
    //   .pipe(
    //     switchMap((data) => {
    //       console.log('d-before-switchMap', data);
    //       return this.postService.getPosts();
    //     })
    //   )
    //   .subscribe((data3) => {
    //     console.log('data3', data3);
    //   });

    // request aggregation, promise all
    // forkJoin(this.postService.getPostById(1), this.postService.getPosts())
    //   .pipe()
    //   .subscribe((data4) => {
    //     console.log('data4', data4);
    //   });
  }

  posts: Posts[] = [];
  ngOnInit(): void {
    const qParams = this.ac.snapshot.queryParams;
    console.log('qParams', qParams);

    this.loadData();
    // const sb = this.postService.getPosts().subscribe({
    //   next: (data: Posts[]) => {
    //     console.log('data', data);
    //     // try
    //     // işlem başarılı ise network hatası yoksa veriyi buradan yakalarız
    //     this.posts = [...data];
    //   },
    //   error: (err) => {
    //     // catch
    //     console.log('err', err);
    //   },
    //   complete() {
    //     // finally
    //     // hata olsa da olmasada burası çalışır.
    //   },
    // });

    // this.subs.push(this.sb1);
  }
}
