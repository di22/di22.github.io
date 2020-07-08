import { Component, OnInit } from '@angular/core';
import {animateText, onSideNavChange} from '../animations/animations';
import {Page} from '../DTO`s/page';
import {SideMenuService} from '../services/side-menu.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class RightMenuComponent implements OnInit {
   sideNavState: boolean;
   linkText: boolean;

  public pages: Page[] = [
    {name: 'الرئيسيه', link: '/notary', icon: 'homepage'},
    {name: 'الخدمات', link: '/services', icon: 'data-center'},
    {name: 'البريد الوارد', link: 'inbox', icon: 'mail'},
    {name: 'معاملاتي', link: 'my-requests', icon: 'inbox'},
    {name: 'البحث', link: 'search', icon: 'magnifying-glass'},
    {name: 'إعدادات المعاملات', link: 'TransactionTypes', icon: 'settings'},
    {name: 'إعدادات أكواد النظام', link: 'adminTipes', icon: 'front-end'},
    {name: 'إعدادات قوالب التوثيق', link: 'adminDebagaa', icon: 'data-center'},
    {name: 'إعدادات الرسوم', link: 'fees-setting', icon: 'fee'},
    {name: 'تسجيل الموظفين', link: '/add-employee', icon: 'account'},
    {name: 'طباعة إيصال التحصيل', link: '/print-collection-receipt', icon: 'receipt'},
    {name: 'طباعة الباركود', link: '/print-barcode', icon: 'print'},
    {name: 'تحديد الصلاحيات الخاصه', link: '/requests-authorizations', icon: 'permission'},
    {name: 'طباعة إحصائيات المعاملات', link: '/print-requests-collections', icon: 'growth'},
    {name: 'الأستعلام عن سريان المحرر', link: '/document-validation', icon: 'deadline'},
    {name: 'التقارير الماليه', link: '/financial-reports', icon: 'graph'},
    {name: 'التقارير الماليه', link: '/financial-reports', icon: 'graph'},
  ];
  constructor(private sideMenuService: SideMenuService) { }

  ngOnInit() {
  }
  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;
    this.linkText = this.sideNavState;
    this.sideMenuService.sideNavState$.next(this.sideNavState);
  }
}
