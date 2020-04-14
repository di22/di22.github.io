import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableDataService } from 'src/app/common/services/table-data.service';
@Component({
  selector: 'app-fees-setting',
  templateUrl: './fees-setting.component.html',
  styleUrls: ['./fees-setting.component.scss']
})
export class FeesSettingComponent implements OnInit {
  // public displayedColumns = ['name', 'dateOfBirth', 'address','address1','address2', 'update', 'delete'];

  directions=[{
    id:1,name:"direction1"
  },
  {
    id:2,name:"direction2"
  },
  {
    id:1,name:"direction1"
  },
  {
    id:1,name:"direction1"
  },
  {
    id:1,name:"direction1"
  },
  {
    id:1,name:"direction1"
  },
  {
    id:1,name:"direction1"
  },
  {
    id:1,name:"direction1"
  },
  {
    id:1,name:"direction1"
  },
  {
    id:1,name:"direction1"
  },
  {
    id:1,name:"direction1"
  },
]
datasource=new MatTableDataSource<any>();
displayedColumns: string[];
columns = [];
  constructor(private tableDataService:TableDataService) {
    this.tableDataService.getFeesSettingTable();
    this.columns=this.tableDataService.tableColumns;
    this.displayedColumns=this.tableDataService.displayedColumns;
   }

  ngOnInit(): void {
  }

}
