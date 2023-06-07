import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsDetailPageComponent } from './pages/posts-detail-page/posts-detail-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
  declarations: [AppComponent, PostPageComponent, PostsDetailPageComponent, UsersPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
