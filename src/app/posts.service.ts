import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { IPost } from './post.type';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class PostsService {

  posts: IPost[] = [];
  constructor(private serverService: ServerService) { }

  getPosts() {
    this.serverService.get(`${ BASE_URL }/posts`)
      .map(posts => {
        return this.normalizePosts(posts);
      })
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  normalizePosts(posts) {
    return posts.map(this.normalizePost);
  }

  normalizePost(post) {
    return Object.assign({}, post, {
      likeCount: 0,
      author: 'Robin Darnell',
      date: new Date()
    });
  }

  updateLikeCount(id, likeCount) {
    const index = this.posts
      .findIndex((post) => post.id === id);

    this.posts[index].likeCount = likeCount;
  }

}
