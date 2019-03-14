import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'gx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  vote(grade: number) {
    let tempCard = new Card(this.card);
    tempCard.grade = grade;
    this.cardService.updateCard(tempCard).subscribe(res => this.card = res);
  }
}
