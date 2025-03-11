import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Movie {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
  images: string[] = [
    '../../../../assets/wallhaven-p2q5dj_3840x2160.png',
    '../../../../assets/wallhaven-p2qlqe_3840x2160.png',
    '../../../../assets/wallhaven-p8pzjm_3840x2160.png'
  ];

  currentIndex = 0;
  private autoPlayInterval: any;

  movies: Movie[] = [
    {
      title: 'Stranger Things',
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
      imageUrl: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPE6yHQR3o6.jpg?r=608'
    },
    {
      title: 'The Witcher',
      description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
      imageUrl: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYCXCfVkAJjwuoqPh6xLKqyGhwwG1zKGc3xyBqo0P3o9Qj5fvUGOxY1OyIGAXoUHVVgTQrK2YUXp1T5oVwEjWxRZHyg5.jpg?r=dc7'
    },
    {
      title: 'Wednesday',
      description: 'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
      imageUrl: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXvHfHk1WTp79m9e1KhDZKE2FXUUbxG4hpJ5VWYzqrFYrBHiGX_3GHF-VxALEXgT3cNrT3pT5ZXBwELmXgFkNnxb0K8D.jpg?r=f54'
    }
  ];

  // get images(): string[] {
  //   return this.movies.map(movie => movie.imageUrl);
  // }

  get currentMovie(): Movie {
    return this.movies[this.currentIndex];
  }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.movies.length) % this.movies.length;
    this.resetAutoPlay();
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.movies.length;
    this.resetAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
