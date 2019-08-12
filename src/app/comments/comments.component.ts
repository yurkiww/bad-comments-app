import { Component, OnInit } from '@angular/core';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  name = '';
  message = '';

  comments: [{ name: string; message: string }] = [
    {
      name: '',
      message: ''
    }
  ];

  constructor() {}

  ngOnInit() {}

  addComment() {
    this.comments.push({
      name: this.name,
      message: this.message
    });
    this.name = '';
    this.message = '';
  }
}
