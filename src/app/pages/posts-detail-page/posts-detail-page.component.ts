import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts';

@Component({
  templateUrl: './posts-detail-page.component.html',
  styleUrls: ['./posts-detail-page.component.scss'],
})
export class PostsDetailPageComponent implements OnInit {
  // ActivatedRoute servis ile angularda sayfalar arası current route değerlerini okuyabiliriz.
  post$!: Observable<Posts>;
  // yukarıdaki gibi observable değerler tanımlayıp view'den subscribe olabiliriz. component domdan ayrıldığında ise unsubscribe | async pipe ile yaparız.

  constructor(private ar: ActivatedRoute, private ps: PostsService) {}

  ngOnInit(): void {
    const id = (this.ar.snapshot.params as any).id;
    console.log('id', id);
    this.post$ = this.ps.getPostById(id);
  }
}
