import {TransactionService} from '../../services/transaction.service';
import {Observable} from 'rxjs';
import * as fromUser_ORGSelector from '../../store/general/user-org-details/selectors/user-org.selectors';
import {CFees} from './CFees';

export class CFeesEstimation {

  orgId: number;
  cFees: CFees
  userDetails$: Observable<any> = this.store.select(state => fromUser_ORGSelector.selectUserDetails(state));

  constructor(private store, private requestId) {
    this.cFees = new CFees(store);
    this.userDetails$.subscribe(user => {
      this.orgId = user ? user.OrganizationUnitId : null;
    });
  }
  firstEstimation = () => {
    return {
      data: {
        requestId: this.requestId,
        paymentInvoices: [
          {
            itemsCount: 0, // $scope.CopiesNumber,
            paymentAmount: -1,
            paymentType: {
              id: 1   // عدد النسخ
            }
          },
          {
            itemsCount: -1,
            paymentAmount: -1,
            paymentType: {
              id: 3   // عدد الاطراف
            }
          },
          {
            itemsCount: new TransactionService(this.store).Exceeds(),        // ستعتمد مستقبلا على تكرار الفترة
            paymentAmount: this.cFees.getFees() ? this.cFees.getFees() : -1,    // سيتم حساب القيمة الثابتة الأصلية مبدئياً
            paymentType: {
              id: 2
            }
          }

        ],
        paymentSource: {
          id: 1
        },
        exemptedFromFees: false,
        otherExcemptedReason: '',
        exemptedReason: null,
        receiptNo: null,
        authNo: 1,
        cardNo: 1,
        cardName: 'estimation',
        terminalId: 1,
        transactionsSequenceNo: 1,
        totalAmount: 1,
        bookingDate: null,
        organizationUnitId: this.orgId ? this.orgId : null
      }
    };
  }

  finalEstimation = (data) => {
      const estimatedInvoice = [];
      let totalInvoice = 0;
      data.forEach((per, i) => {
        totalInvoice += per.paidValue * per.itemsCount;
        if (per.paymentTypeLu.id == '2' && per.itemsCount > 0) {
          estimatedInvoice.push({
            'feesType': this.cFees.fixedValueSource
            , 'value': per.paidValue
            , 'count': per.itemsCount
            , 'total': per.paidValue * per.itemsCount
          });
        }
        if (per.paymentTypeLu.id == '3') {
          if (per.itemsCount > 0)
            estimatedInvoice.push({
              'feesType': ' الأطراف'
              , 'value': per.paidValue
              , 'count': per.itemsCount
              , 'total': per.paidValue * per.itemsCount
            });
        }
        if (per.paymentTypeLu.id == '1') {
          if (per.itemsCount > 0)
            estimatedInvoice.push({
              'feesType': ' النصوص'
              , 'value': per.paidValue
              , 'count': per.itemsCount
              , 'total': per.paidValue * per.itemsCount
            });
        }
      });
      return {array: estimatedInvoice, total: totalInvoice};
    }

}
