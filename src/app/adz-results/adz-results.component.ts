import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Location} from '@angular/common';

import { AdzSearchPipe } from '../pipes/adz-search.pipe';

import { AdzBookService } from '../services/adz-book.service';
import { AdzBookOverviewComponent } from '../adz-book-overview/adz-book-overview.component'

@Component({
  selector: 'adz-results',
  templateUrl: './adz-results.component.html',
  styleUrls: ['./adz-results.component.css']
})
export class AdzResultsComponent implements OnInit {
  searchResults: any[];
  search: String = '';
  authors: any[] = [];
  author: String = '';

  constructor(private route: ActivatedRoute, private bookService: AdzBookService,
              public dialog: MatDialog,
              private _location: Location
            ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookService.find(params.get('searchInfo')).subscribe((results: any) => {
        this.searchResults = results;
        var authors = results.items.map(item => item.volumeInfo.authors);
        for(var i = 0; i < authors.length; i++)
        {
          if(authors[i] != null) {
            this.authors = this.authors.concat(authors[i]);
          }
        }
        this.authors = Array.from(new Set(this.authors));
      });
    });
  }

  onClick(book): void {
    const dialogRef = this.dialog.open(AdzBookOverviewComponent, {
      data: {selectedBook: book}
    });
  }

  goBack(): void {
    this._location.back();
  }

  byAuthor(value) {
    this.author = value;
  }

}
