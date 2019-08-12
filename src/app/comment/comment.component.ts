import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input('commentItem') comment: { name: string; message: string };

  // private commentItem = false;

  ngOnInit() {}
}
