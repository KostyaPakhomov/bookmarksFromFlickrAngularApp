import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookmarksContainerComponent } from './bookmarks-container/bookmarks-container.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MainComponent } from './main/main.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {PhotoService} from "./services/photo.service";
import {CommonModule} from "@angular/common";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { FavoritesContainerComponent } from './favorites-container/favorites-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksContainerComponent,
    BookmarkComponent,
    MainComponent,
    FavoritesComponent,
    FavoritesContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
