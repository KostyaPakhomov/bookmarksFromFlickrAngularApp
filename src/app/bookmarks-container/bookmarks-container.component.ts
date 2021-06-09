import { Component, OnInit } from '@angular/core';
import  {PhotoService} from "../services/photo.service";
import {Photo} from "../models/photo.model";

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks-container.component.html',
  styleUrls: ['./bookmarks-container.component.css']
})
export class BookmarksContainerComponent implements OnInit {
  images: any = [];
  display = 'none';
  value!: string;
  currentPage = 0;
  l1 = 0;
  l2 = 0;
  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
  }

  search(event: any, value: string) {
    this.l1 = 0;
    this.l2 = 20;
    this.currentPage = 1;
    event.preventDefault();
    if (value && value.length > 0) {
      this.images = [];
      this.value = value;
      value.toLowerCase();
      // if (value && value.length > 0) {
        this.photoService.search_keyword(value)
          .toPromise()
          .then(res => {
            this.images = res;
          });
      // }
    }

  }

  next() {
    if (this.value && this.value.length > 0) {
      if (this.l2 == this.images.length) {
        this.photoService.search_keyword(this.value)
          .toPromise()
          .then(res => {
            this.images = this.images.concat(res);
          });
      }
    }
    if (this.images.length>=this.l2){
      this.currentPage += 1;
      this.l1 += 20;
      this.l2 += 20;
    } else {alert("No more pictures!")}
  }

  previous() {
    if (this.l1 != 0) {
      this.currentPage -= 1;
      this.l1 -= 20;
      this.l2 -= 20;
    }
  }

  bookmark(photo: Photo, image: Photo) {
    const elemIds = this.images?.map((el: any) => el.id);
    const but = document.getElementsByClassName('addBookmark');
    for (let i = 0; i < elemIds?.length; i++) {
      if (elemIds) {
        const elementId = elemIds[i];
        if (image.id == elementId) {
          console.log(image.id + ' = ' + elementId);
          console.log(but[i] + 'вот кнопка');
          but[i].setAttribute('disabled', 'true');
          // @ts-ignore
          but[i].style.backgroundColor = 'gray';
          but[i].innerHTML = 'Added!';
          let existingEntries = JSON.parse(<string>localStorage.getItem("allEntries"));

          if(existingEntries == null) existingEntries = [];
          const elID = existingEntries?.map((el: any) => el.id);
          if (photo.id != elID) {
              localStorage.setItem("entry", JSON.stringify(photo));
              existingEntries.push(photo);
              localStorage.setItem("allEntries", JSON.stringify(existingEntries));
          }
        }
      }
    }
  }

}
