import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {FavoritesContainerComponent} from "./favorites-container/favorites-container.component";
import {BookmarksContainerComponent} from "./bookmarks-container/bookmarks-container.component";

const routes: Routes = [
  {path: '', redirectTo: '/bookmark-container', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'bookmark-container', component: BookmarksContainerComponent},
  {path: 'favorites-container', component: FavoritesContainerComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
