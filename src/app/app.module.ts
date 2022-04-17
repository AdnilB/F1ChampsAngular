import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ApiService } from './services/apiService.service';
import { ListPageComponent } from './list-page/list-page.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginationDetailComponent } from './pagination-detail/pagination-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    ListPageComponent,
    PaginationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService,
              HttpClient],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
