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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PostComponent,
    LikeComponent,
    PostTitleComponent,
    PostDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
