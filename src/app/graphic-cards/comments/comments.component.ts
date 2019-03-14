import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentList } from '../model/comment-list';
import { CardService } from '../services/card.service';

@Component({
  selector: 'gx-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: CommentList;

  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.cardService.getComments(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
        res => this.comments = res
      );
    });
  }

  addComment(comment) {
    this.comments.results.push(comment);
    this.comments.count += 1;
  }

}
