import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Collection {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-collections',
  imports: [CommonModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {
  collections: Collection[] = [];
  
  constructor() {}
  
  ngOnInit(): void {
    this.fetchCategories();
  }
  
  fetchCategories(): void {
    this.collections = [
      {
        id: 1,
        name: 'Anime',
        imageUrl: '../../../../assets/wallhaven-p2q5dj_3840x2160.png',
        description: 'Explore the vibrant world of Japanese animation'
      },
      {
        id: 2,
        name: 'Abstract',
        imageUrl: '../../../../assets/categories/abstract.jpg',
        description: 'Discover beautiful abstract art and patterns'
      },
      {
        id: 3,
        name: 'Avengers',
        imageUrl: '../../../../assets/categories/avengers.jpg',
        description: 'Superhero wallpapers from the Marvel universe'
      },
      {
        id: 4,
        name: 'Nature',
        imageUrl: '../../../../assets/categories/nature.jpg',
        description: 'Breathtaking landscapes and natural wonders'
      },
      {
        id: 5,
        name: 'Landscapes',
        imageUrl: '../../../../assets/categories/landscapes.jpg',
        description: 'Scenic views from around the world'
      }
    ];
  }
}
