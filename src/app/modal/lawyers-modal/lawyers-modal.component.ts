import {Component, Inject, OnInit} from '@angular/core';
import {TableDataService} from '../../common/services/table-data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store';
import {Observable} from 'rxjs';
import * as fromLawOfficesSelectors from '../../store/general/lookups/law-offices/selectors/law-office.selectors';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-lawyers-modal',
  templateUrl: './lawyers-modal.component.html',
  styleUrls: ['./lawyers-modal.component.scss']
})
export class LawyersModalComponent implements OnInit {

  appStore$: Observable<fromApp.State>;
  lawers$: Observable<any> = this.store.select(state => fromLawOfficesSelectors.lawersSelector(state));
  displayedColumns: string[];
  columns: any;
  lawyersToSave: any = [];
  selection = new SelectionModel<any>(true, []);
  constructor(private store: Store<fromApp.State>,
              private tableDataService: TableDataService,
              private dialogRef: MatDialogRef<LawyersModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tableDataService.getLawersDataTableModal();
    this.columns = this.tableDataService.tableColumns;
    this.displayedColumns = this.tableDataService.displayColumns;
  }

  ngOnInit() {
    this.appStore$ = this.store.select(state => state);
  }

  onAdd(): void {
    this.dialogRef.close(this.lawyersToSave);
  }
  onSelect = (element, event) => {
    if (event.checked) {
    this.lawyersToSave.push(element);
    } else {
      this.lawyersToSave.forEach((e, i) => {
        if (element.LawyerId === e.LawyerId) {
          this.lawyersToSave.splice(i, 1);
        }
      });
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
   // const numRows = this.dataSource.fees-package.length;
  //  return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
  //  this.isAllSelected() ?
  //    this.selection.clear() :
     // this.dataSource.fees-package.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any) {
   // if (!row) {
   //   return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
   // }
  //  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
