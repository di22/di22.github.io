import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {TransactionCategories} from '../../common/data/transactionCategories';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessagesService {

  private subject = new BehaviorSubject<any>('');
  message: Observable<any> = this.subject.asObservable();
  transactionCategories: TransactionCategories = new TransactionCategories();
  routUrl = this.route.url;
  constructor(private route: Router) { }
  getValidatorErrorMessage = (validatorName: string, validatorValue?: any, fieldName?: string) => {

    const config = {
      required: `  يرجي إدخال ${fieldName}`,
      validChose: `  يرجي إختيار ${fieldName}`,
      validDate: `  يرجي إدخال تاريخ قبل اليوم ${fieldName}`,
      email: 'The ' + validatorName + ' must contain a valid email address',
      pattern: 'يرجي إدخال صيغه صحيحه',
      minLength: ` يرجي إدخال أكثر من ${validatorValue.min} رقما `,
      maxLength: ` يرجي إدخال أقل من${validatorValue.max}رقما `,
      invalidPassword: 'Password must be at least 6 characters long, and contain a number.',
      invalidMatch: 'The password and confirm password must match'
    };
    // this.subject.next(config[validatorName]);
    return config[validatorName];
  }
getMessages = () => {
    return of([
      'required',
    'validChose',
    'validDate',
    'email',
    'pattern',
    'minLength',
    'maxLength',
    'invalidPassword',
    'invalidMatch'
    ]);
}
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  validateDate(input: AbstractControl): ValidationErrors | null {
    if (input.value > new Date().toISOString().substring(0, 10)) {
      return { validDate: true };
    }
    return null;
  }

  validateSelectInput(input: FormControl): ValidationErrors | null {
    if (input.value === 'new') {
      return { validChose: true };
    }
    return null;
  }

  conditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (formControl.get('customer').get('customerIDType').value === 1) {
      return Validators.required(formControl.get('customer').get('idExpiryDate'));
    }
    this.transactionCategories.marriageAndDivorceTransactions.some(url => {
      if (this.routUrl.includes(url)) {
        return Validators.required(formControl.get('customer').get('mobileNo'));
      }
    });

    return null;
  }
}
