import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FlickrOutput} from "../models/flickr-output.model";
import {Photo} from "../models/photo.model";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  @Input() image!: any;
  disabled = false;
  buttonText = 'Bookmark it!';
  bookmarks!: FlickrOutput[];
  @Output() bookmark = new EventEmitter<Photo>();

  constructor() { }

  ngOnInit(): void {
    let existingEntries = JSON.parse(<string>localStorage.getItem("allEntries"));

    if(existingEntries == null) existingEntries = [];
    const elID = existingEntries?.map((el: any) => el.id);
    for (let i=0; i<elID.length; i++) {

      if (elID){
        const elId = elID[i];
        if (this.image.id == elId) {
          this.disabled = true
          this.buttonText = 'Added!'
        }
      }
    }
  }

  addBookmark() {
    const photo: Photo = {
      url: this.image.url,
      id: this.image.id,
      title: this.image.title,
    };
    this.bookmark.emit(
      photo
    )
  }

}
