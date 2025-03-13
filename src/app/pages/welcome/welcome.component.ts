import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { CollectionsComponent } from './collections/collections.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [BannerComponent, CategoriesComponent, CollectionsComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

}
