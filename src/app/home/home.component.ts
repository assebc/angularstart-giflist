import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list/gif-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchBarComponent } from "./ui/search-bar/search-bar.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [GifListComponent, InfiniteScrollModule, SearchBarComponent, MatProgressSpinnerModule]
})
export default class HomeComponent {
  redditService = inject(RedditService);
}