import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { IPost } from './post.type';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class PostsService {

  posts: IPost[] = [{
    id: 0,
    title: 'Post # 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    likeCount: 0,
    date: new Date(),
    author: 'Alice',
  }, {
    id: 1,
    title: 'Post # 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    likeCount: 0,
    date: new Date(),
    author: 'Alice',
  }, {
    id: 2,
    title: 'Post # 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    likeCount: 0,
    date: new Date(),
    author: 'Alice',
  }];
  constructor(private serverService: ServerService) { }

  getFilteredPosts(query) {
    if (!query) { return this.posts; }
    const lowerCaseQuery = query.toLowerCase();

    return this.posts.filter((post) => {
      return post.title
        .toLowerCase()
        .includes(lowerCaseQuery);
    });
  }

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

  getPost(id: number) {
    return this.posts.find(post => post.id === id);
  }

}
