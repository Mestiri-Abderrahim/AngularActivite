import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }
  increaseLikes() {
    this.post.loveIts = this.post.loveIts + 1;
  }
  decreaseLikes() {
    this.post.loveIts = this.post.loveIts - 1;
  }


  ngOnInit() {
  }

}
