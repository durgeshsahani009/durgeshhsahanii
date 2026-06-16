import { Routes } from '@angular/router';
import { TutorialsComponent } from './tutorials';
import { Angular } from './angular/angular';
import { Mongodb } from './mongodb/mongodb';
import { Nodejs } from './nodejs/nodejs';
import { JsBasics } from './js-basics/js-basics';
import { HtmlCss } from './html-css/html-css';
import { JavascriptES6 } from './javascript-es6/javascript-es6';
import { JavascriptCore } from './javascript-core/javascript-core';
import { Linux } from './linux/linux';


export const TUTORIAL_ROUTES: Routes = [
  { path: '', redirectTo: "/m/tutorial", pathMatch: "full" },
  {
    path: 'tutorial', component: TutorialsComponent, children: [
      { path: '', redirectTo: "/m/tutorial/javascript", pathMatch: "full" },
      { path: 'javascript-es6', component: JavascriptES6},
      { path: 'javascript', component: JavascriptCore },
      { path: 'angular', component: Angular },
      { path: 'mongodb', component: Mongodb },
      { path: 'nodejs', component: Nodejs },
      { path: 'linux', component: Linux },
      { path: 'js-basics', component: JsBasics},
      { path: 'html-css', component: HtmlCss }
    ]
  }
];
