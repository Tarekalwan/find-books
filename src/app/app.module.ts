import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from  '@ngx-translate/http-loader';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { AdzSearchComponent } from './adz-search/adz-search.component';
import { AdzResultsComponent } from './adz-results/adz-results.component';

import { AdzBookService } from './services/adz-book.service';
import { AdzBookOverviewComponent } from './adz-book-overview/adz-book-overview.component';
import { AdzSearchPipe } from './pipes/adz-search.pipe';
import { AdzSearchByAuthorPipe } from './pipes/adz-search-by-author.pipe';

const appRoutes: Routes = [
  {path: 'search', component: AdzSearchComponent},
  {path: 'results/:searchInfo', component: AdzResultsComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
]

export function HttpLoaderFactory(http: HttpClient) {

 return new TranslateHttpLoader(http);

}

@NgModule({
  declarations: [
    AppComponent,
    AdzSearchComponent,
    AdzResultsComponent,
    AdzBookOverviewComponent,
    AdzSearchPipe,
    AdzSearchByAuthorPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,

  ],
  providers: [AdzBookService],
  bootstrap: [AppComponent],
  entryComponents: [AdzBookOverviewComponent]
})
export class AppModule { }
