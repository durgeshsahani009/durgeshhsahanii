import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Finance, StockPayload } from '../../../../services/finance';
import { filter, take } from 'rxjs';
import { swalDark } from '../../../../core/swal-theme';

@Component({
  selector: 'app-add-stock',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-stock.html',
  styleUrl: './add-stock.scss',
})
export class AddStock implements OnInit {
  stockForm!: FormGroup;
  stockId: string | null = null;
  isEditMode = false;
  readonly priorityOptions: any[] = ['High', 'Medium', 'Low'];
   recommendedByOptions: any[] = ['B.L.A Ambala', 'Rachit Khandelwal', 'Other'];

  constructor(private fb: FormBuilder,
    private financeservice: Finance,
    private route: ActivatedRoute,
    private router: Router) {
    this.stockForm = this.initForm();
  }

  ngOnInit(): void {
    this.stockId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.stockId;

    if (this.isEditMode && this.stockId) {
      this.financeservice
        .getStock(this.stockId)
        .pipe(
          filter((stock) => stock != null),
          take(1)
        )
        .subscribe((stock) => {
          this.stockForm.reset({
            stockName: stock.stockName,
            ltp: stock.ltp,
            priority: stock.priority,
            stopLosss: stock.stopLosss,           
            targetFirst: stock.targetFirst,
            deadlineT1: this.toDate(stock.deadlineT1),
            targetSecond: stock.targetSecond,
            deadlineT2: this.toDate(stock.deadlineT2),
            targetThird: stock.targetThird,
            deadlineT3: this.toDate(stock.deadlineT3),
            recomendedBy: stock.recomendedBy,
            hasTargetMatch: stock.hasTargetMatch ?? false,
          });
        });
    }
  }

  async onSubmit(data: Record<string, unknown>): Promise<void> {
    if (this.stockForm.invalid) {
      this.stockForm.markAllAsTouched();
      return;
    }

    const stockName = String(data['stockName'] ?? '').trim();
    const action = this.isEditMode ? 'update' : 'add';
    const result = await swalDark.fire({
      title: this.isEditMode ? 'Update stock?' : 'Add stock?',
      text: `Are you sure you want to ${action} "${stockName}"?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: this.isEditMode ? 'Yes, update' : 'Yes, add',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    });

    if (!result.isConfirmed) {
      return;
    }

    this.saveStock(data);
  }

  private saveStock(data: Record<string, unknown>): void {
    const payload: StockPayload = {
      stockName: String(data['stockName'] ?? '').trim(),
      ltp: this.toNumberOrNull(data['ltp']),
      priority: this.toPriorityOrNull(data['priority']),
      stopLosss: this.toNumberOrNull(data['stopLosss']),
      targetFirst: this.toNumberOrNull(data['targetFirst']),
      deadlineT1: this.toTimestamp(data['deadlineT1']),
      targetSecond: this.toNumberOrNull(data['targetSecond']),
      deadlineT2: this.toTimestamp(data['deadlineT2']),
      targetThird: this.toNumberOrNull(data['targetThird']),
      deadlineT3: this.toTimestamp(data['deadlineT3']),
      hasTargetMatch: Boolean(data['hasTargetMatch']),
      recomendedBy: this.toRecommendedByOrNull(data['recomendedBy']),
      updatedAt: Date.now(),
    };

    const request =
      this.isEditMode && this.stockId
        ? this.financeservice.updateStock(this.stockId, payload)
        : this.financeservice.addStock(payload);

    request
      .then(() => { 
          this.router.navigate(['/m/finance/stock-tracking']);
          this.onReset();
          return;      
      })
      .catch((err: { message?: string }) => {     
        void swalDark.fire({
          title: 'Save failed',
          text: err?.message?.includes('PERMISSION_DENIED')
            ? 'Permission denied. Deploy database rules: firebase deploy --only database'
            : 'Failed to save stock. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  }

  private toTimestamp(value: unknown): number | null {
    if (value instanceof Date) {
      return value.getTime();
    }
    if (typeof value === 'number') {
      return value;
    }
    return null;
  }

  private toDate(value: number | null): Date | null {
    return value == null ? null : new Date(value);
  }

  private toNumberOrNull(value: unknown): number | null {
    if (value === null || value === undefined || value === '') {
      return null;
    }
    const num = Number(value);
    return Number.isNaN(num) ? null : num;
  }

  private toPriorityOrNull(value: unknown): any | null {
    if (["High", "Medium", "Low"].includes(value as string)) {
      return value;
    }
    return null;
  }

  private toRecommendedByOrNull(value: unknown): any | null {
    if (this.recommendedByOptions.includes(value as string)) {
      return value;
    }
    return null;
  }



  onReset(): void {
    this.stockForm.reset({
      stockName: '',
      ltp: null,
      priority: null,
      stopLosss: null,
      targetFirst: null,
      deadlineT1: null,
      targetSecond: null,
      deadlineT2: null,
      targetThird: null,
      deadlineT3: null,
      recomendedBy: null,
      hasTargetMatch: false,
    });
    this.stockForm.markAsPristine();
    this.stockForm.markAsUntouched();
  }

  goBack(): void {
    this.router.navigate(['/m/finance/stock-tracking']);
  }

  initForm(): FormGroup {
    return this.fb.group({
      stockName: ['', Validators.required],
      ltp: [null as number | null],
      priority: [null as any | null],
      stopLosss: [null as number | null],
      targetFirst: [null as number | null],
      deadlineT1: [null as Date | null],
      targetSecond: [null as number | null],
      deadlineT2: [null as Date | null],
      targetThird: [null as number | null],
      deadlineT3: [null as Date | null],
      recomendedBy: [null as any | null],
      hasTargetMatch: [false],
    });
  }
}
 