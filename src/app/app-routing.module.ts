import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsDetailPageComponent } from './pages/posts-detail-page/posts-detail-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserPageResolver } from './pages/services/user-page.resolver';

const routes: Routes = [
  {
    path: 'posts',
    component: PostPageComponent,
  },
  {
    path: 'posts/:id', // dinamik route tanımı
    component: PostsDetailPageComponent,
  },
  {
    path: 'users',
    component: UsersPageComponent,
    data: {
      title: 'User Page',
    },
    resolve: {
      users: UserPageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
