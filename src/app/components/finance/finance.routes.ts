import { Routes } from '@angular/router';
import { FinanceComponent } from './finance';
import { StocksTracker } from './stock-market/stocks-tracker/stocks-tracker';
import { AddStock } from './stock-market/add-stock/add-stock';

export const FINANCE_ROUTES: Routes = [
  { path: '', redirectTo: "/m/finance", pathMatch: "full" },
  { path: 'finance', component: FinanceComponent, children: [
      { path: '', redirectTo: "/m/finance/stock-tracking", pathMatch: "full" },
      { path: 'stock-tracking', component: StocksTracker},
      { path: 'add-stock/:id', component: AddStock},
      { path: 'add-stock', component: AddStock},
    ]
  }
];
