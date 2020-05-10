import { Component, OnInit, ViewChild } from '@angular/core';
import {NotaryAdminsService} from '../../../services/notary-admins.service';
import {Observable} from 'rxjs';
import {AdminTypes} from '../../../DTO`s/admin-types';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
//import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-tipes',
  templateUrl: './admin-tipes.component.html',
  styleUrls: ['./admin-tipes.component.scss']
})
export class AdminTipesComponent implements OnInit {

  adminTipesControl = new FormControl('');

  adminTypes$: Observable<AdminTypes[]> = this.adminTypes.getNotaryAdmins();

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private adminTypes: NotaryAdminsService) {
   }

  ngOnInit() {
  }


  displayedColumns: string[] = ['position', 'arabicName', 'englishName', 'englishSymbol', 'statues', 'edit', 'delete'];

}



