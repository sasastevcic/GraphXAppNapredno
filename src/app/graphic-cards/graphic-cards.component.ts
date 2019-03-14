import { Component, OnInit } from '@angular/core';

import { CardService } from './services/card.service';
import { CardList } from './model/card-list';

@Component({
  selector: 'app-graphic-cards',
  templateUrl: './graphic-cards.component.html',
  styleUrls: ['./graphic-cards.component.css']
})
export class GraphicCardsComponent implements OnInit {
  cards: CardList;
  sizes: number[] = [5, 10, 20];
  params = {
    "page": 1,
    "pageSize": 5
  }

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.updateParams();
  }

  updateParams(params?: any) {
    if(params) {
      this.params.pageSize = params.pageSize || this.params.pageSize;
      this.params.page = params.page || this.params.page;
    }
    this.cardService.getCards(this.params).subscribe(res => this.cards = res);
  }

}
