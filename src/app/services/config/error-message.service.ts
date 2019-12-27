import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

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
}
