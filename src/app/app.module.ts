import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PostComponent } from './post/post.component';
import { LikeComponent } from './like/like.component';
import { PostTitleComponent } from './post-title/post-title.component';
import { PostDateComponent } from './post-date/post-date.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsService } from './posts.service';
import { ServerService } from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PostComponent,
    LikeComponent,
    PostTitleComponent,
    PostDateComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostsService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
