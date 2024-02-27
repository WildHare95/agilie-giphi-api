import { ChangeDetectionStrategy, Component } from '@angular/core';
import { scan, takeWhile, timer } from "rxjs";
import { MatDialogRef } from "@angular/material/dialog";
import {PaginatorService} from "../../services/paginator.service";

@Component({
  selector: 'agilie-no-results-dialog',
  templateUrl: './no-results-dialog.component.html',
  styleUrls: ['./no-results-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoResultsDialogComponent {
  private closeDelay = 10
  timer$ = timer(0, 1000).pipe(
    scan(acc => --acc, this.closeDelay),
    takeWhile(x => {
      if (x <= 0) this.closeDialog()
      return x >= 0
    })
  );

  constructor(
    public dialogRef: MatDialogRef<NoResultsDialogComponent>,
    private _paginatorService: PaginatorService
  ) {}

  public closeDialog() {
    this._paginatorService.currentTab$.next(0)
    this.dialogRef.close()
  }
}
