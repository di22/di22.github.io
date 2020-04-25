import {Injectable, NgZone} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {SuccessModalComponent} from '../../modal/success-modal/success-modal.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private zone: NgZone) { }

   errorMessage = (errorText: any) => {
    this.zone.run(() => {
      const snack = this.snackBar.open(errorText, 'ok', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['red-snackbar']
      });
      snack.onAction().subscribe(() => {
        snack.dismiss();
      });
    });
  }

  successMessage = (text: any) => {
    const dialogRef = this.dialog.open(SuccessModalComponent, {
      width: '550px',
      data: {message: text}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  deleteProcurationCustomer = (id, entityId) => {

  }
}
