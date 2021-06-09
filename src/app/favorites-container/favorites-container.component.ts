import { Component, OnInit } from '@angular/core';
import {Photo} from "../models/photo.model";

@Component({
  selector: 'app-favorites-container',
  templateUrl: './favorites-container.component.html',
  styleUrls: ['./favorites-container.component.css']
})
export class FavoritesContainerComponent implements OnInit {
  favorites: any = [];
  display = 'none';
  value!: string;
  constructor() { }

  ngOnInit(): void {

    if(localStorage){
      let item=JSON.parse(<string>localStorage.getItem("allEntries"));
      if(item!=null){
        this.favorites =  item
      }
    }
  }

  removeBookmark(photo: Photo, image: Photo) {
    const elemIds = this.favorites?.map((el: any) => el.id);
    for (let i = 0; i < elemIds?.length; i++) {
      if (elemIds) {
        const elementId = elemIds[i];
        if (image.id == elementId) {
          console.log(image.id + ' = ' + elementId);
          let index = this.favorites.indexOf(image);
          if (index > -1) {
            this.favorites.splice(index, 1);
          }
          localStorage.setItem('allEntries', JSON.stringify(this.favorites));
        }
      }
    }
  }

}
