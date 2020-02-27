import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../../services/config/common.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL: string;
  mociURL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL =  this.commonService.getURL('procuration');
    this.mociURL =  this.commonService.getURL('service/integration/moci/companyData/');
  }
  createCustomer = (obj) => {
   return this.http.post<any>(`${this.URL}add-procuration-customer.do`, obj);
  }
  updateCustomer = (obj) => {
    return this.http.post<any>(`${this.URL}update-procuration-customer.do`, obj);
  }
  getCustomerFromROP = (obj) => {
    return this.http.get<any>(`${this.commonService.getROPURL()}`, {params: obj});
  }
  searchProcurationCustomerChilds = (obj) => {
    return  this.http.post(`${this.URL}search-customer-child.do`, obj);
  }
  deleteCustomer = (id) => {
    return  this.http.post(`${this.URL}delete-procuration-customer.do`, id);
  }
  getMociData = (cr) => {
    return this.http.get<any>(`${this.mociURL + cr}`);
  }
  getMociDataMocaup = (cr) => {
    if (cr === 126) {
      return {
        success: true,
        status: null,
        data: {
          companySummary: {
            company: {
              crNumber: '1177447',
              arabicName: 'مسقط للصناعات الغذائية المتحدة',
              englishName: null,
              registrationDate: 1373140800000,
              establishmentDate: 1373227200000,
              expiryDate: 1688587200000,
              comment: null,
              isSubjectToForeignInvestment: true,
              isExpired: false,
              registrationStatus: {
                code: 'ACTIVE',
                arabicName: 'نشط',
                englishName: 'Active'
              },
              country: {
                code: '512',
                arabicName: 'سلطنة عمان',
                englishName: 'Sultanate of Oman'
              },
              legalStatus: {
                code: 'LLC',
                arabicName: 'شركة محدودة المسؤولية',
                englishName: 'Limited Liability Company'
              }
            },
            activities: [{
              isicCode: '103010',
              isicVersion: '103010',
              arabicName: 'صنع رقائق البطاطس',
              englishName: 'Manufacture of potato chips'
            }, {
              isicCode: '105002',
              isicVersion: '105002',
              arabicName: 'إنتاج الروب (الزبادي)، القشدة، الزبدة، السمن ... إلخ',
              englishName: 'Production of yoghurt, butter, cream, ghee etc.'
            }, {
              isicCode: '103008',
              isicVersion: '103008',
              arabicName: 'حفظ وتحميص وتعبئة المكسرات بأنواعها',
              englishName: 'Preserving, roasting and packing of nuts'
            }, {
              isicCode: '521002',
              isicVersion: '521002',
              arabicName: 'مستودع البضائع',
              englishName: 'Goods warehouses'
            }, {
              isicCode: '105001',
              isicVersion: '105001',
              arabicName: 'تجهيز وبسترة وتعبئة الحليب واللبن الطازج',
              englishName: 'Processing, pasteurizing, bottling or filling the fresh or fermented milk'
            }, {
              isicCode: '103005',
              isicVersion: '103005',
              arabicName: 'صنع صلصة الطماطم',
              englishName: 'Manufacture of tomato paste'
            }, {
              isicCode: '463010',
              isicVersion: '463010',
              arabicName: 'البيع بالجملة لمواد غذائية متنوعة (تشمل المشروبات)',
              englishName: 'Wholesale of miscellaneous food products (including drinks)'
            }, {
              isicCode: '107302',
              isicVersion: '107302',
              arabicName: 'صنع الحلويات السكرية',
              englishName: 'Manufacture of sugar confectionery'
            }, {
              isicCode: '107106',
              isicVersion: '107106',
              arabicName: 'صنع المنتجات الخفيفة مثل رقائق الذرة وكعك دقيق الذرة (التورتيلا)، غير معد بالخبز',
              englishName: 'Manufacture of light products such as corn chips and tortillas, unbaked'
            }, {
              isicCode: '463006',
              isicVersion: '463006',
              arabicName: 'البيع بالجملة للحلويات ومنتجات المخابز',
              englishName: 'Wholesale of sugar confectionery and bakery products'
            }, {
              isicCode: '461004',
              isicVersion: '461004',
              arabicName: 'وكالات الأعمال التجارية (لا تشمل أعمال المحافظ والمتاجرة بالأوراق المالية)',
              englishName: 'Trading business agencies (excluding portfolio and security exchange)'
            }, {
              isicCode: '106201',
              isicVersion: '106201',
              arabicName: 'صنع النشاء من الذرة أو الأرز أو الحبوب الأخرى أو البطاطا أو من النباتات الأخرى',
              englishName: 'Manufacture of starches from rice, potatoes, maize etc.'
            }, {
              isicCode: '701001',
              isicVersion: '701001',
              arabicName: 'مكتب إداري',
              englishName: 'Management offices'
            }, {
              isicCode: '461003',
              isicVersion: '461003',
              arabicName: 'مكاتب التصدير والاستيراد',
              englishName: 'Activities of export and import offices'
            }, {
              isicCode: '259904',
              isicVersion: '259904',
              arabicName: 'صنع الأوعية المعدنية المستخدمة في نقل وتعبئة السلع مثل: البراميل والدلاء والصناديق والعلب ... إلخ',
              englishName: 'Manufacture of metal containers used in transport and packing of goods, such as: pails, cans, drums, buckets, boxes, tins and cans for food products and collapsible tubes and boxes'
            }],
            investors: [
              // FIRST INVESTOR
              {
                numberOfShares: 150000,
                registrationDate: 1459368000000,
                designation: {
                  code: 'LL_PARTNER',
                  arabicName: 'شريك محدود المسؤولية',
                  englishName: 'Limited Liability Partner'
                },
                person: {
                  civilId: '4925543',
                  passport: {
                    number: '02633138',
                    issueCountry: {
                      code: '512',
                      arabicName: 'سلطنة عمان',
                      englishName: 'Sultanate of Oman'
                    },
                    issueDate: 1269288000000
                  },
                  dateOfBirth: 218664000000,
                  arabicName: 'خالد محمد حميد العامري',
                  englishName: 'KHALID MOHAMED HUMAID AL AMRI',
                  gender: 'MALE',
                  nationality: {
                    code: '512',
                    arabicName: 'سلطنة عمان',
                    englishName: 'Sultanate of Oman'
                  }
                },
                company: null
              },
              // SECOND INVESTOR
              {
                numberOfShares: 175000,
                registrationDate: 1373140800000,
                designation: {
                  code: 'OWNER', // "LL_PARTNER",
                  arabicName: 'شريك محدود المسؤولية',
                  englishName: 'Limited Liability Partner'
                },
                person: {
                  civilId: '85559666', // "60612651",
                  passport: null,
                  dateOfBirth: -366696000000,
                  arabicName: 'شيتان جيرام فيد',
                  englishName: '-',
                  gender: 'MALE',
                  nationality: {
                    code: '356',
                    arabicName: 'الهند',
                    englishName: 'India'
                  }
                },
                company: null
              }
              ,
              // THIRD INVESTOR
              {
                numberOfShares: 175000,
                registrationDate: 1531080000000,
                designation: {
                  code: 'LL_PARTNER',
                  arabicName: 'شريك محدود المسؤولية',
                  englishName: 'Limited Liability Partner'
                },
                person: {
                  civilId: null,
                  passport: {
                    number: '2676126',
                    issueCountry: {
                      code: '356',
                      arabicName: 'الهند',
                      englishName: 'India'
                    },
                    issueDate: -2209003200000
                  },
                  dateOfBirth: -332568000000,
                  arabicName: 'فيد نيليش كومار جيرام',
                  englishName: '-',
                  gender: 'MALE',
                  nationality: {
                    code: '356',
                    arabicName: 'الهند',
                    englishName: 'India'
                  }
                },
                company: null
              }
            ],

            signatories: [{
              civilId: '60612651',
              passport: null,
              dateOfBirth: -366696000000,
              arabicName: 'شيتان جيرام فيد',
              englishName: '-',
              gender: 'MALE',
              nationality: {
                code: '356',
                arabicName: 'الهند',
                englishName: 'India'
              }
            }, {
              civilId: null,
              passport: {
                number: '2676126',
                issueCountry: {
                  code: '356',
                  arabicName: 'الهند',
                  englishName: 'India'
                },
                issueDate: -2209003200000
              },
              dateOfBirth: -332568000000,
              arabicName: 'فيد نيليش كومار جيرام',
              englishName: '-',
              gender: 'MALE',
              nationality: {
                code: '356',
                arabicName: 'الهند',
                englishName: 'India'
              }
            }],
            placeOfActivities: [{
              poaCode: '41962254',
              registrationDate: null,
              activityLicenses: [{
                isSubjectToLicensing: false,
                isObtained: true,
                number: null,
                date: null,
                activity: {
                  isicCode: '463010',
                  isicVersion: '463010',
                  arabicName: 'البيع بالجملة لمواد غذائية متنوعة (تشمل المشروبات)',
                  englishName: 'Wholesale of miscellaneous food products (including drinks)'
                }
              }],
              address: {
                town: {
                  code: '01020010',
                  arabicName: 'وادي عدي',
                  englishName: 'Wadi Adi',
                  isSpecialZone: null
                },
                state: {
                  code: '0102',
                  arabicName: 'مطرح',
                  englishName: 'Muttrah',
                  isSpecialZone: null
                },
                governorate: {
                  code: '01',
                  arabicName: 'محافظة مسقط',
                  englishName: 'Muscat Governorate',
                  isSpecialZone: null
                },
                streetArabicName: null,
                streetEnglishName: null,
                wayNumber: null,
                buildingNumber: null,
                areaNumber: null,
                postalCode: '0',
                poBox: '0',
                latitude: null,
                longitude: null,
                formNumber: null,
                contractNumber: null
              }
            }, {
              poaCode: '43535509',
              registrationDate: null,
              activityLicenses: [{
                isSubjectToLicensing: false,
                isObtained: true,
                number: null,
                date: null,
                activity: {
                  isicCode: '461004',
                  isicVersion: '461004',
                  arabicName: 'وكالات الأعمال التجارية (لا تشمل أعمال المحافظ والمتاجرة بالأوراق المالية)',
                  englishName: 'Trading business agencies (excluding portfolio and security exchange)'
                }
              }],
              address: {
                town: {
                  code: '01020010',
                  arabicName: 'وادي عدي',
                  englishName: 'Wadi Adi',
                  isSpecialZone: null
                },
                state: {
                  code: '0102',
                  arabicName: 'مطرح',
                  englishName: 'Muttrah',
                  isSpecialZone: null
                },
                governorate: {
                  code: '01',
                  arabicName: 'محافظة مسقط',
                  englishName: 'Muscat Governorate',
                  isSpecialZone: null
                },
                streetArabicName: null,
                streetEnglishName: null,
                wayNumber: null,
                buildingNumber: null,
                areaNumber: null,
                postalCode: '0',
                poBox: '0',
                latitude: null,
                longitude: null,
                formNumber: null,
                contractNumber: null
              }
            }, {
              poaCode: '43535378',
              registrationDate: null,
              activityLicenses: [{
                isSubjectToLicensing: false,
                isObtained: true,
                number: null,
                date: null,
                activity: {
                  isicCode: '521002',
                  isicVersion: '521002',
                  arabicName: 'مستودع البضائع',
                  englishName: 'Goods warehouses'
                }
              }],
              address: {
                town: {
                  code: '05080001',
                  arabicName: 'بدبد',
                  englishName: 'Bidbid',
                  isSpecialZone: null
                },
                state: {
                  code: '0508',
                  arabicName: 'بدبد',
                  englishName: 'Bid Bid',
                  isSpecialZone: null
                },
                governorate: {
                  code: '05',
                  arabicName: 'محافظة الداخلية',
                  englishName: 'Al Dakhiliyah Governorate',
                  isSpecialZone: null
                },
                streetArabicName: null,
                streetEnglishName: null,
                wayNumber: null,
                buildingNumber: null,
                areaNumber: null,
                postalCode: '0',
                poBox: null,
                latitude: null,
                longitude: null,
                formNumber: null,
                contractNumber: null
              }
            }, {
              poaCode: '45060106',
              registrationDate: null,
              activityLicenses: [{
                isSubjectToLicensing: false,
                isObtained: true,
                number: null,
                date: null,
                activity: {
                  isicCode: '521002',
                  isicVersion: '521002',
                  arabicName: 'مستودع البضائع',
                  englishName: 'Goods warehouses'
                }
              }],
              address: {
                town: {
                  code: '05010001',
                  arabicName: 'نزوى',
                  englishName: 'Nizwa',
                  isSpecialZone: null
                },
                state: {
                  code: '0501',
                  arabicName: 'نــــزوى',
                  englishName: 'Nizwa',
                  isSpecialZone: null
                },
                governorate: {
                  code: '05',
                  arabicName: 'محافظة الداخلية',
                  englishName: 'Al Dakhiliyah Governorate',
                  isSpecialZone: null
                },
                streetArabicName: null,
                streetEnglishName: null,
                wayNumber: null,
                buildingNumber: null,
                areaNumber: null,
                postalCode: '0',
                poBox: null,
                latitude: null,
                longitude: null,
                formNumber: null,
                contractNumber: null
              }
            }, {
              poaCode: '45414072',
              registrationDate: null,
              activityLicenses: [{
                isSubjectToLicensing: false,
                isObtained: true,
                number: null,
                date: null,
                activity: {
                  isicCode: '521002',
                  isicVersion: '521002',
                  arabicName: 'مستودع البضائع',
                  englishName: 'Goods warehouses'
                }
              }],
              address: {
                town: {
                  code: '02010175',
                  arabicName: 'الصناعيات الجديدة',
                  englishName: 'As Sinayat Al Jadidah',
                  isSpecialZone: null
                },
                state: {
                  code: '0201',
                  arabicName: 'صــلالـــة',
                  englishName: 'Salalah',
                  isSpecialZone: null
                },
                governorate: {
                  code: '02',
                  arabicName: 'محافظة ظفار',
                  englishName: 'Dhofar Governorate',
                  isSpecialZone: null
                },
                streetArabicName: null,
                streetEnglishName: null,
                wayNumber: '0',
                buildingNumber: '0',
                areaNumber: null,
                postalCode: '114',
                poBox: '544',
                latitude: '17.002161',
                longitude: '53.898926',
                formNumber: null,
                contractNumber: null
              }
            }, {
              poaCode: '40711431',
              registrationDate: null,
              activityLicenses: [{
                isSubjectToLicensing: false,
                isObtained: true,
                number: null,
                date: null,
                activity: {
                  isicCode: '463006',
                  isicVersion: '463006',
                  arabicName: 'البيع بالجملة للحلويات ومنتجات المخابز',
                  englishName: 'Wholesale of sugar confectionery and bakery products'
                }
              }],
              address: {
                town: {
                  code: '01020010',
                  arabicName: 'وادي عدي',
                  englishName: 'Wadi Adi',
                  isSpecialZone: null
                },
                state: {
                  code: '0102',
                  arabicName: 'مطرح',
                  englishName: 'Muttrah',
                  isSpecialZone: null
                },
                governorate: {
                  code: '01',
                  arabicName: 'محافظة مسقط',
                  englishName: 'Muscat Governorate',
                  isSpecialZone: null
                },
                streetArabicName: null,
                streetEnglishName: null,
                wayNumber: null,
                buildingNumber: null,
                areaNumber: null,
                postalCode: '114',
                poBox: '554',
                latitude: null,
                longitude: null,
                formNumber: null,
                contractNumber: null
              }
            }
            ]
          }
        }
      };
    } else {
      return false;
    }
  }

}
