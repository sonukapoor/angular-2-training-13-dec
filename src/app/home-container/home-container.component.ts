import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  query: string;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  updateQuery(query: string) {
    this.query = query;
  }

}
