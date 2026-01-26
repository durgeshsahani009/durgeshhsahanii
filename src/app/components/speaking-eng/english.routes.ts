import { Routes } from '@angular/router';
import { EnglishComponent } from './english';
import { UseOfPhrases } from './use-of-prases/use-of-phrases';


export const ENGLISH_ROUTES: Routes = [
  { path: '', redirectTo: "/m/speaking", pathMatch: "full" },
  {
    path: 'speaking', component: EnglishComponent, children: [
      { path: '', redirectTo: "/m/speaking/useofphrases", pathMatch: "full" },
      { path: 'useofphrases', component:UseOfPhrases }
    ]
  }
];
