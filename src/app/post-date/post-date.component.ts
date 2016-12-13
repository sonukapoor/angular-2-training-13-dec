import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-date',
  templateUrl: './post-date.component.html',
  styleUrls: ['./post-date.component.css']
})
export class PostDateComponent implements OnInit {

  @Input() date;

  constructor() { }

  ngOnInit() {
  }

}
