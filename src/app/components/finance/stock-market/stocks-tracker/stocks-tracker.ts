import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Finance, StockRecord } from '../../../../services/finance';

@Component({
  selector: 'app-stock-stracker',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './stocks-tracker.html',
  styleUrl: './stocks-tracker.scss',
})
export class StocksTracker {
  errorMessage = '';

  stocks$!: ReturnType<Finance['getStocks']>;

  constructor(
    private financeService: Finance,
    private router: Router
  ) {
    this.stocks$ = this.financeService.getStocks();
  }

  editStock(stock: StockRecord): void {
    if (!stock.id) {
      return;
    }
    this.router.navigate(['/m/finance/add-stock', stock.id]);
  }

  deleteStock(stock: StockRecord): void {
    if (!stock.id) {
      return;
    }

    const confirmed = confirm(`Delete "${stock.stockName}"?`);
    if (!confirmed) {
      return;
    }

    this.financeService
      .deleteStock(stock.id)
      .catch((err: { message?: string }) => {
        console.error('Delete failed:', err);
        this.errorMessage = err?.message?.includes('PERMISSION_DENIED')
          ? 'Permission denied. Update Firebase Realtime Database rules for stocks_tracker.'
          : 'Failed to delete stock. Please try again.';
      });
  }

  formatDeadline(value: number | null): string {
    if (value == null) {
      return '—';
    }
    return new Date(value).toLocaleDateString();
  }
}
