import {Component, Inject, OnInit} from '@angular/core';
import {TableDataService} from '../../common/services/table-data.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-fees-modal',
  templateUrl: './fees-modal.component.html',
  styleUrls: ['./fees-modal.component.scss']
})
export class FeesModalComponent implements OnInit {
  P = {
    l : ['صفر', ' ألف'],
    unis : ['', 'واحد', 'اثنين', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'],
    tens : ['', 'عشرة', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'],
    xtens : ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'],
    huns : ['', 'مائة', 'مئتان', 'ثلاث مائة', 'اربع مائة', 'خمس مائة', 'ست مائة', 'سبع مائة', 'ثمان مائة', 'تسع مائة'],
    thos : ['', 'ألف', 'ألفان', 'ثلاثة ألاف', 'اربعة ألاف', 'خمسة ألاف', 'ستة ألاف', 'سبعة ألاف', 'ثمانية ألاف', 'تسعة ألاف'],
    xthos : ['عشرة ألاف', 'أحد عشر ألف', 'اثنا عشر ألف', 'ثلاثة عشر ألف', 'أربعة عشر ألف', 'خمسة عشر ألف', 'ستة عشر ألف', 'سبعة عشر ألف', 'ثمانية عشر ألف', 'تسعة عشر ألف'],
    and : 'و',
  };
  N = '٠١٢٣٤٥٦٧٨٩';

  displayedColumns: string[];
  columns: any;
  fees: any;
  total: number;
  constructor(private tableDataService: TableDataService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fees = data.array;
    this.total = data.total;
    this.tableDataService.getFeesTableModal();
    this.columns = this.tableDataService.tableColumns;
    this.displayedColumns = this.tableDataService.displayColumns;
  }

  ngOnInit(): void {
  }
  replaceNumerals(s) {
    if (!(/[٠١٢٣٤٥٦٧٨٩]+/).test(s)) {return s; }
    const t = typeof(s);
    s = s.split('').map((o) => {
      if (this.N.indexOf(o) !== -1) {
        return this.N.indexOf(o);
      }
      return o;
    }).join('');
    return s;
  }
  pounds(y) {
    y = this.replaceNumerals(y);
    const s = y.toString().replace(/[\, ]/g, '');
    if (s !== parseFloat(s)) { return false; }
    let x = s.indexOf('.'); x = x === -1 ? s.length : x;
    if (x > 6 || s.length - x > 2) { return false; }
    y = parseFloat(s);
    const d = y;
    if (!y) {return this.P.l[0]; }
    const str = [];
    const r = null;
    let v = 0;
    let p = null;
    let c = y % 10;
    let n = null;
    let i = 1;
    n = (r === (y / Math.pow(10, i++))) ? r % 10 : undefined;
    do {
      // Units
      if (c > 0) {str.push(this.P.unis[c]); }
      if (n === undefined) {break; } p = c; c = n; n = (r === (y / Math.pow(10, i++))) ? r % 10 : undefined; v += p * Math.pow(10, i - 3);
      // Tens
      if (c === 1) {str[0] = this.P.xtens[p]; }
      if (c > 1) {
        if (v > 0) {str.unshift(this.P.and); }
        str.unshift(this.P.tens[c]);
      }
      if (n === undefined) {break; }p = c; c = n; n = (r === (y / Math.pow(10, i++))) ? r % 10 : undefined; v += p * Math.pow(10, i - 3);
      // Hundreds
      if (v > 0 && c > 0) {str.push(this.P.and); }
      if (c > 0) {str.push(this.P.huns[c]); }
      if (n === undefined) {break; }p = c; c = n; n = (r === (y / Math.pow(10, i++))) ? r % 10 : undefined; v += p * Math.pow(10, i - 3);
      // Thousands
      if (v > 0 && c > 0 && !n) {str.push(this.P.and); }
      if (c > 0 && !n) {str.push(this.P.thos[c]); }
      if (n === undefined) {break; }p = c; c = n; n = (r === (y / Math.pow(10, i++))) ? r % 10 : undefined; v += p * Math.pow(10, i - 3);
      // Ten Thousands
      if (v > 0 && c > 0 && y - c * 1e4 - p * 1e3 > 0) {str.push(this.P.and); }
      if (c === 1) {str.push(this.P.xthos[p]); }
      if (c > 1) {
        str.push(this.P.l[1]);
        str.push(this.P.tens[c]);
        if (p > 0) {
          str.push(this.P.and);
          str.push(this.P.unis[p]);
        }
      }
      if (n === undefined) {break; }
      p += 10 * c; c = n; n = (r === (y / Math.pow(10, i++))) ? r % 10 : undefined; v += p * Math.pow(10, i - 3);
      // Hundred Thousands
      if (v > 0 && c > 0) {str.push(this.P.and); }
      if (c > 0) {
        if (!p) {str.push(this.P.l[1]); }
        str.push(this.P.huns[c]);
      }
    } while (false);
    return str.reverse().join(' ');
  }
}
