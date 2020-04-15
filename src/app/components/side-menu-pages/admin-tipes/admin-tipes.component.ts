import { Component, OnInit, ViewChild } from '@angular/core';
//import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-tipes',
  templateUrl: './admin-tipes.component.html',
  styleUrls: ['./admin-tipes.component.scss']
})
export class AdminTipesComponent implements OnInit {



  constructor() {
   }

  ngOnInit() {
  }


  displayedColumns: string[] = ['position', 'arabicName', 'englishName', 'englishSymbol', 'statues', 'edit', 'delete'];

}



