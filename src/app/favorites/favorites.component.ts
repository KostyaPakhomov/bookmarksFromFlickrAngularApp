import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FlickrOutput} from "../models/flickr-output.model";
import {Photo} from "../models/photo.model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  @Input() image!: any;
  bookmarks!: FlickrOutput[];
  @Output() removeBookmark = new EventEmitter<Photo>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteBookmark() {
    const photo: Photo = {
      url: this.image.url,
      id: this.image.id,
      title: this.image.title,
    };

    this.removeBookmark.emit(
      photo
    )

  }
}
