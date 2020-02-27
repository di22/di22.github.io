import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-mo7rr-modal',
  templateUrl: './mo7rr-modal.component.html',
  styleUrls: ['./mo7rr-modal.component.scss']
})
export class Mo7rrModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<Mo7rrModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
