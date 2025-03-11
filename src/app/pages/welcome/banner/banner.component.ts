import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Movie {
  title: string;
  description: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  images: string[] = [
    '../../../../assets/wallhaven-p2q5dj_3840x2160.png',
    '../../../../assets/wallhaven-0wj16n_1920x1080.png',
    '../../../../assets/wallhaven-p8pzjm_3840x2160.png',
  ];

  currentIndex = 0;
  private autoPlayInterval: any;

  movies: Movie[] = [
    {
      title: 'Anime',
      description: 'The whole verse of anime has started with Goku.',
    },
    {
      title: 'Avengers',
      description: 'Avengers are united to save the world from Thanos.',
    },
    {
      title: 'Abstract',
      description:
        'People like abstract art because it makes them feel clever.',
    },
  ];

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
    this.currentIndex =
      (this.currentIndex - 1 + this.movies.length) % this.movies.length;
    this.resetAutoPlay();
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.movies.length;
    this.resetAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextImage();
    }, 4000);
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
