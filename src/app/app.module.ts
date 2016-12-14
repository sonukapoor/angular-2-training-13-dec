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
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { NavbarComponent } from './navbar/navbar.component';

const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PostComponent,
    LikeComponent,
    PostTitleComponent,
    PostDateComponent,
    PostsListComponent,
    SearchbarComponent,
    HomeContainerComponent,
    PostContainerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostsService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
