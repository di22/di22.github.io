import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cr-actions-modal',
  templateUrl: './cr-actions-modal.component.html',
  styleUrls: ['./cr-actions-modal.component.scss']
})
export class CRActionsModalComponent implements OnInit {

  actionsForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<CRActionsModalComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForms();
  }
initForms = () => {
    this.actionsForm = this.formBuilder.group({
      reason: [],
      reasonInternal: []
    })
}

reset = () => {
    this.actionsForm.reset();
}
}
