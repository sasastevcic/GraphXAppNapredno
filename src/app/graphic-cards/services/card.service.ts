import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CardList } from '../model/card-list';
import { Card } from '../model/card';
import { CommentList } from '../model/comment-list';
import { Comment } from '../model/comment';

const baseUrl = "http://localhost:3000/api/cards";

@Injectable({
  'providedIn': 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards(params?: any): Observable<CardList> {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
          .set("page", params.page && params.page.toString() || '1')
          .set("pageSize", params.pageSize && params.pageSize.toString() || '5')
      }
    }

    return this.http.get<CardList>(baseUrl, queryParams).pipe(map(res => {
      return new CardList(res);
    }));
  }

  getComments(id: number): Observable<CommentList> {
    return this.http.get<CommentList>(baseUrl + "/" + id + "/comments").pipe(map(res => {
      return new CommentList(res);
    }));
  }

  saveComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(baseUrl + "/" + comment.cards + "/comments", comment).pipe(map(res => {
      return new Comment(res);
    }));
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(baseUrl + "/" + card._id, card).pipe(map(res => {
      return new Card(res);
    }));
  }
}
