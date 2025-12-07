import { Routes } from '@angular/router';
import { TutorialsComponent } from './tutorials';
import { Javascript } from './javascript/javascript';
import { Angular } from './angular/angular';
import { Mongodb } from './mongodb/mongodb';
import { Nodejs } from './nodejs/nodejs';


export const TUTORIAL_ROUTES: Routes = [
  { path: '', redirectTo: "/m/tutorial", pathMatch: "full" },
  {
    path: 'tutorial', component: TutorialsComponent, children: [
      { path: '', redirectTo: "/m/tutorial/javascript", pathMatch: "full" },
      { path: 'javascript', component: Javascript },
      { path: 'angular', component: Angular },
      { path: 'mongodb', component: Mongodb },
      { path: 'nodejs', component: Nodejs }
    ]
  }
];
