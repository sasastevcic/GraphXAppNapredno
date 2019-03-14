import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gx-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {
  @Input() text: string;
  @Input() textLength: number;
  showMore: boolean = true;
  showText: string;

  constructor() { }

  ngOnInit() {
    this.toggleShow();
  }

  toggleShow() {
    this.showMore = !this.showMore;
    if(this.showMore || this.textLength > this.text.length) {
      this.showText = this.text;
    } else {
      this.showText = this.text.substr(0, this.textLength) + "...";
    }
  }
}
