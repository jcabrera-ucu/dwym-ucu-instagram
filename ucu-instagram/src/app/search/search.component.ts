import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Post } from '../post';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  postsByTag: Array<Post> = [];
  showAllResults: boolean = false;

  constructor(private searchService: SearchService) {
  }

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue !== null) {
      this.getPostsByTag(inputValue);
    }
  }

  getPostsByTag(searchInput: string) {
    this.searchService.getPostsByTag(searchInput)
      .then(posts => {
        this.postsByTag = posts;
        this.showAllResults = true;
      })
      .catch(error => {
        console.error('Error al obtener los posts:', error);
      });
  }
}
