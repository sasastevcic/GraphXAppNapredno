import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardService } from '../../services/card.service';
import { Comment } from '../../model/comment';

@Component({
  selector: 'gx-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  comment: Comment;
  @Output() addComment = new EventEmitter();

  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.comment = new Comment();
  }

  newComment() {
    this.comment.cards = parseInt(this.route.snapshot.paramMap.get("id"));
    this.comment.date = (new Date).toISOString();
    this.cardService.saveComment(this.comment).subscribe(res => {
      this.comment = new Comment();
      this.addComment.emit(res);
    });
  }
}
