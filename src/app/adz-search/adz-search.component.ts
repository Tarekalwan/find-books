import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'adz-search',
  templateUrl: './adz-search.component.html'
})
export class AdzSearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit() {
    this.createSearchForm();
  }

  createSearchForm(): void {
    this.searchForm = new FormGroup({
      searchInfo: new FormControl(''),
    });
  }

  onSearch(): void {
    const searchInfo = this.searchForm.value.searchInfo.trim();
    if(searchInfo != '')
      this.router.navigate(['results', searchInfo]);
  }

}
