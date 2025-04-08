import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DisplayRoomComponent } from './pages/display-room/display-room.component';

export const routes: Routes = [
  { path: '', redirectTo: 'display-room', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'display-room', component: DisplayRoomComponent }
];
