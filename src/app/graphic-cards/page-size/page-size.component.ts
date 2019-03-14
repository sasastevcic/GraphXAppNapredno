import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gx-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.css']
})
export class PageSizeComponent implements OnInit {
  @Input() pageSizes: number[];
  @Input() activePageSize: number;
  @Output() pageSizeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changePageSize(pageSize) {
    this.pageSizeChange.emit({"pageSize": pageSize, "page": 1});
  }
}
