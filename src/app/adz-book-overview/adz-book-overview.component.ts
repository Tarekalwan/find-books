import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  selectedBook: any;
}

@Component({
  selector: 'adz-adz-book-overview',
  templateUrl: './adz-book-overview.component.html',
  styleUrls: ['./adz-book-overview.component.css']
})
export class AdzBookOverviewComponent implements OnInit {
  selectedBook;

  constructor(
    public dialogRef: MatDialogRef<AdzBookOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.selectedBook = data.selectedBook;
    }

  ngOnInit() {
    console.log(this.selectedBook.volumeInfo);
  }
}
