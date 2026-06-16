import { Routes } from '@angular/router';
import { Personal } from './personal';
import { Profile } from './profile/profile';
import { Home } from './profile/home/home';
import { AuthGuard } from '../../services/auth-guard';
import { NameNumber } from './occult-science/name-number/name-number';
import { BirthChart } from './occult-science/birth-chart/birth-chart';


export const PERSONAL_ROUTES: Routes = [
  { path: '', redirectTo: "/personal/occult", pathMatch: "full" },
  {
    path: 'occult', component: Personal, children: [
      { path: '', redirectTo: "/personal/occult/name-number", pathMatch: "full" },
      { path: 'name-number', component: NameNumber },
      { path: 'birth-chart', component: BirthChart },
    ],
     canActivate:[AuthGuard]
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
