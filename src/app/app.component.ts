import { Component, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[];

  constructor() {
    this.posts = [{
      title: 'Mon premier post',
      content: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
       the industry's standard dummy text ever since the 1500s, when an unknown printer took
        a galley of type and scrambled it to make a type specimen book. It has survived not
         only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. including versions of Lorem Ipsum`,
      loveIts: 2,
      created_at: new Date()
    }, {
      title: 'Mon deuxième post',
      content: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
       the industry's standard dummy text ever since the 1500s, when an unknown printer took
        a galley of type and scrambled it to make a type specimen book. It has survived not
         only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. including versions of Lorem Ipsum.
      `,
      loveIts: -3,
      created_at: new Date()
    }, {
      title: 'Encore un post',
      content: `
      It is a long established fact that a reader will be distracted by the readable content
       of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using 'Content here, content
         here', making it look like readable English
      `,
      loveIts: 0,
      created_at: new Date()
    }];
  }
}
