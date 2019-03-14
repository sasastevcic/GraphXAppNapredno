import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PaginationComponent } from './graphic-cards/pagination/pagination.component';
import { PageSizeComponent } from './graphic-cards/page-size/page-size.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
import { CardComponent } from './graphic-cards/card/card.component';
import { ShowMoreComponent } from './graphic-cards/show-more/show-more.component';
import { CommentsComponent } from './graphic-cards/comments/comments.component';
import { CommentComponent } from './graphic-cards/comments/comment/comment.component';
import { CommentFormComponent } from './graphic-cards/comments/comment-form/comment-form.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PaginationComponent,
    PageSizeComponent,
    GraphicCardsComponent,
    CardComponent,
    ShowMoreComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
