import { Routes } from '@angular/router';
import { Personal } from './personal';
import { NameNumber } from './numerology/name-number/name-number';
import { BirthChart } from './numerology/birth-chart/birth-chart';
import { Profile } from './profile/profile';
import { Home } from './profile/home/home';


export const PERSONAL_ROUTES: Routes = [
  { path: '', redirectTo: "/personal/numerology", pathMatch: "full" },
  {
    path: 'numerology', component: Personal, children: [
      { path: '', redirectTo: "/personal/numerology/name-number", pathMatch: "full" },
      { path: 'name-number', component: NameNumber },
      { path: 'birth-chart', component: BirthChart },
    ]
  },
  {
    path: 'profile', component: Personal, children: [
      { path: '', redirectTo: "/personal/profile/me", pathMatch: "full" },
      { path: 'me', component: Profile, children:[
        { path: '', redirectTo: "/personal/profile/me/default", pathMatch: "full" },
        {path:"default", component:Home}
      ] },
    ]
  }
];
