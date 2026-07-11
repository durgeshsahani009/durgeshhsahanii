import { Injectable } from '@angular/core';
import {
  Database,
  ref,
  push,
  update,
  remove,
  listVal,
  objectVal,
} from '@angular/fire/database';
import { map, Observable } from 'rxjs';
export interface StockRecord {
  id?: string;
  stockName: string;
  ltp: number | null;
  priority: any | null;
  stopLosss: number | null;
  recomendedBy?: string | null;
  targetFirst: number | null;
  deadlineT1: number | null;
  targetSecond: number | null;
  deadlineT2: number | null;
  targetThird: number | null;
  deadlineT3: number | null;
  hasTargetMatch: boolean;
  updatedAt: number;
}

export type StockPayload = Omit<StockRecord, 'id'>;

@Injectable({
  providedIn: 'root',
})
export class Finance {
  private readonly stocksPath = 'stocks_tracker';

  constructor(private db: Database) {}

  addStock(data: StockPayload) {
    return push(ref(this.db, this.stocksPath), data);
  }

  getStocks(): Observable<StockRecord[]> {
    return (listVal(ref(this.db, this.stocksPath), { keyField: 'id' }) as Observable<StockRecord[] | null>).pipe(
      map((stocks) => stocks ?? [])
    );
  }

  getStock(id: string): Observable<StockRecord | null> {
    return (objectVal(ref(this.db, `${this.stocksPath}/${id}`)) as Observable<Omit<StockRecord, 'id'> | null>).pipe(
      map((stock) => (stock ? { ...stock, id } : null))
    );
  }

  updateStock(id: string, data: Partial<StockPayload>) {
    return update(ref(this.db, `${this.stocksPath}/${id}`), data);
  }

  deleteStock(id: string) {
    return remove(ref(this.db, `${this.stocksPath}/${id}`));
  }
}
