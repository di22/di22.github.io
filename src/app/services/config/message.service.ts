import {Injectable, NgZone} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar, private zone: NgZone) { }

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
    this.zone.run(() => {
      const snack = this.snackBar.open(text, 'ok', {
        horizontalPosition: 'left',
        verticalPosition: 'top',
        panelClass: ['green-snackbar']
      });
      snack.onAction().subscribe(() => {
        snack.dismiss();
      });
    });
  }
}
