import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  incrementLike() {
    this.count++;
    this.countChange.emit(this.count);
  }

  ngOnInit() {
  }

}
