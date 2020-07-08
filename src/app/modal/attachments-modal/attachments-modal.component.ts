import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-mo7rr-modal',
  templateUrl: './attachments-modal.component.html',
  styleUrls: ['./attachments-modal.component.scss']
})
export class AttachmentsModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AttachmentsModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
