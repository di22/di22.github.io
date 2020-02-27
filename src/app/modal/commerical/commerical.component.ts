import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TableDataService} from '../../common/services/table-data.service';

@Component({
  selector: 'app-commerical',
  templateUrl: './commerical.component.html',
  styleUrls: ['./commerical.component.scss']
})
export class CommericalComponent implements OnInit {

  commercialData: null;
  displayedColumnsCommercialInvestors: string[];
  displayedColumnsCommercialBranches: string[];
  displayedColumnsCommercialSignatories: string[];
  columnsCommercialInvestors: any;
  columnsCommercialBranches: any;
  columnsCommercialSignatories: any;
  constructor(private dialogRef: MatDialogRef<CommericalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private tableDataService: TableDataService) {
    this.commercialData = data;
    this.tableDataService.getCommercialInvestorsModal();
    this.columnsCommercialInvestors = this.tableDataService.tableColumns;
    this.displayedColumnsCommercialInvestors = this.tableDataService.displayColumns;

    this.tableDataService.getCommercialSignatoriesModal();
    this.columnsCommercialSignatories = this.tableDataService.tableColumns;
    this.displayedColumnsCommercialSignatories = this.tableDataService.displayColumns;

    this.tableDataService.getCommercialBranchesModal();
    this.columnsCommercialBranches = this.tableDataService.tableColumns;
    this.displayedColumnsCommercialBranches = this.tableDataService.displayColumns;
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
