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
    let output = '—';
    if (value === null) output = '—';
    if (value) output = new Date(value).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return output;
  }

  calculateRemainingTime(
    deadlineT1?: number | null,
    deadlineT2?: number | null,
    deadlineT3?: number | null
  ): string {
    const deadlines = [deadlineT1, deadlineT2, deadlineT3].filter(
      (deadline): deadline is number => typeof deadline === 'number' && Number.isFinite(deadline)
    );

    if (deadlines.length === 0) {
      return '—';
    }

    const now = Date.now();
    const futureDeadlines = deadlines.filter((deadline) => deadline > now);

    if (futureDeadlines.length === 0) {
      return 'Deadline passed';
    }

    const nextDeadline = Math.min(...futureDeadlines);
    const diff = nextDeadline - now;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;

    if (months > 0) {
      return `${months}m ${days}d`;
    }

    return `${days}d`;
  }
}
