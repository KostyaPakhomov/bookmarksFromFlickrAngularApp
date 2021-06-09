import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {FlickrOutput} from "../models/flickr-output.model";
import {FlickrPhoto} from "../models/flickr-photo.model";



@Injectable()
export class PhotoService {
  prevKeyword!: string;
  currPage: number = 1;
  constructor(private http: HttpClient) { }

  search_keyword(keyword: string) {
    if (this.prevKeyword === keyword) {
      this.currPage++;
    } else {
      this.currPage = 1;
    }
    this.prevKeyword = keyword;
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&'
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=20&page=${this.currPage}`
    return this.http.get<FlickrOutput>(url + params).pipe(
      map(
        (res: FlickrOutput) => {
          const urlArr: any[] = [];
          res.photos.photo.forEach(
            (ph: FlickrPhoto) => {
              const photoObj = {
                url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
                title: ph.title,
                id: ph.id
              };
              urlArr.push(photoObj);
            }
          );
          return urlArr;
        }
      )
    );
  }
}
