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
    {name: 'الرئيسيه', link: '/notary', icon: 'home'},
    {name: 'الخدمات', link: '/services', icon: 'local_laundry_service'},
    {name: 'البريد الوارد', link: 'inbox', icon: 'mail'},
    {name: 'معاملاتي', link: '/my-requests', icon: 'archive'},
    {name: 'البحث', link: '/search', icon: 'search'},
    {name: 'إعدادات المعاملات', link: '/requests-setting', icon: 'settings_applications'},
    {name: 'إعدادات أكواد النظام', link: '/requests-code-setting', icon: 'code'},
    {name: 'إعدادات قوالب التوثيق', link: 'adminDebaga', icon: 'settings_input_component'},
    {name: 'إعدادات الرسوم', link: '/fees-setting', icon: 'monetization_on'},
    {name: 'تسجيل الموظفين', link: '/add-employee', icon: 'group_add'},
    {name: 'طباعة إيصال التحصيل', link: '/print-collection-receipt', icon: 'local_printshop'},
    {name: 'طباعة الباركود', link: '/print-barcode', icon: 'line_weight'},
    {name: 'تحديد الصلاحيات الخاصه', link: '/requests-authorizations', icon: 'supervised_user_circle'},
    {name: 'طباعة إحصائيات المعاملات', link: '/print-requests-collections', icon: 'multiline_chart'},
    {name: 'الأستعلام عن سريان المحرر', link: '/document-validation', icon: 'assignment'},
    {name: 'التقارير الماليه', link: '/financial-reports', icon: 'local_atm'},
    {name: 'التقارير الماليه', link: '/financial-reports', icon: 'local_atm'},
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
