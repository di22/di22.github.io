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
  routUrl = this.route.config[this.route.config.length - 1].path;
  constructor(private route: Router) { }
  getValidatorErrorMessage = (validatorName: string, validatorValue?: any, fieldName?: string) => {

    const config = {
      required: `  يرجي إدخال ${fieldName}`,
      validChose: `  يرجي إختيار ${fieldName}`,
      validDateLess: `يرجي إدخال تاريخ قبل تاريخ اليوم`,
      validDateMore: `يرجي إدخال تاريخ أكبر من تاريخ اليوم`,
      email: 'The ' + validatorName + ' must contain a valid email address',
      pattern: 'يرجي إدخال صيغه صحيحه',
      minlength: ` يرجي إدخال أكثر من ${validatorValue ? validatorValue.min : 0} رقما `,
      maxlength: ` يرجي إدخال أقل من${validatorValue ? validatorValue.max : 0}رقما `,
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

  validateDateLess(input: AbstractControl): ValidationErrors | null {
    if (input.value && input.value > new Date().toISOString().substring(0, 10)) {
      return { validDateLess: true };
    }
    return null;
  }
  validateDateMore(input: AbstractControl): ValidationErrors | null {
    if (input.value && input.value <= new Date().toISOString().substring(0, 10)) {
      return { validDateMore: true };
    }
    return null;
  }
  validateSelectInput(input: FormControl): ValidationErrors | null {
    if (input.value === 'new') {
      return { validChose: true };
    }
    return null;
  }

  idExpiryDateConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (formControl.parent.get('customerIDType').value === 1) {
      return Validators.required(formControl);
    }
    return null;
  }

mobileNoConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (this.transactionCategories.marriageAndDivorceTransactions.includes(this.routUrl)
      && formControl.parent.parent.get('particpantType').value.id !== 3) {
      return Validators.required(formControl);
    }
    return null;
  }
addressConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (this.transactionCategories.marriageAndDivorceTransactions.includes(this.routUrl)
      && formControl.parent.parent.get('particpantType').value.id !== 3) {
      return Validators.required(formControl);
    }
    return null;
  }
workStatusIdConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (this.transactionCategories.marriageAndDivorceTransactions.includes(this.routUrl)
      && formControl.parent.parent.get('particpantType').value.id !== 3) {
      return Validators.required(formControl);
    }
    return null;
  }
embassyDocNoConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (this.transactionCategories.marriageTransactions.includes(this.routUrl)
    && formControl.parent.parent.get('particpantType').value.id !== 3) {
      return Validators.required(formControl);
    }
    return null;
  }
embassyDocDateConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (this.transactionCategories.marriageTransactions.includes(this.routUrl)
      && formControl.parent.parent.get('particpantType').value.id !== 3) {
      return Validators.required(formControl);
    }
    return null;
  }
  widowingConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (this.transactionCategories.widowingProof.includes(this.routUrl) && formControl.parent.parent.get('particpantType').value.id === 2) {
      return Validators.required(formControl);
    }
    return null;
  }
  issuerConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (formControl.parent.parent.get('particpantType').value.id !== 3
      && (formControl.parent.parent.get('customer').get('customerCategory').value === 3
      || formControl.parent.parent.get('customer').get('customerCategory').value === 74)) {
      return Validators.required(formControl);
    }
    return null;
  }

  procurationNoteConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (formControl.parent.get('manualFlag').value === true
      && formControl.parent.parent.get('particpantType').value.id !== 3
      && (formControl.parent.parent.get('customer').get('customerCategory').value === 3
      || formControl.parent.parent.get('customer').get('customerCategory').value === 74
        || formControl.parent.parent.get('customer').get('customerCategory').value === 1
        || formControl.parent.parent.get('customer').get('customerCategory').value === 7)) {
      return Validators.required(formControl);
    }
    return null;
  }

  repProcurationSerialConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if (formControl.parent.get('manualFlag').value === false
      && formControl.parent.parent.get('particpantType').value.id !== 3
      && (formControl.parent.parent.get('customer').get('customerCategory').value === 3
        || formControl.parent.parent.get('customer').get('customerCategory').value === 74
        || formControl.parent.parent.get('customer').get('customerCategory').value === 1
        || formControl.parent.parent.get('customer').get('customerCategory').value === 7)) {
      return Validators.required(formControl);
    }
    return null;
  }

  facilityConditionallyRequiredValidator = (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }

    if ( formControl.parent.parent.get('particpantType').value.id !== 3
      && (formControl.parent.parent.get('customer').get('customerCategory').value === 55
        || formControl.parent.parent.get('customer').get('customerCategory').value === 64
        || formControl.parent.parent.get('customer').get('customerCategory').value === 6)) {
      return Validators.required(formControl);
    }
    return null;
  }


}
