import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { About } from './Components/about/about';
import { Contact } from './Components/contact/contact';
import { User } from './Components/user/user';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  {path: 'user', component: User},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: About },
];
