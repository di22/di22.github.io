import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FlatTreeControl} from '@angular/cdk/tree';
import {DebagaTemplete} from '../../../../DTO`s/debaga-templete';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTree} from '../../../../DTO`s/flatTree';
import moment from 'moment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../store';
import {EncryptDecryptService} from '../../../../services/config/encrypt-decrypt.service';
import {ActivatedRoute} from '@angular/router';
import {
  getExpiryDate,
} from '../store/actions/request-debaga.actions';
import * as fromRequestDebagaSelectors from '../store/selectors/request-debaga.selectors';
import {ValidationMessagesService} from '../../../../services/config/validation-messages.service';
import {MessageService} from '../../../../services/config/message.service';
import {GetRequestDetails} from '../../../parties/party/store/request/actions/request.actions';
import {DebagaService} from '../../../services/debaga.service';
import {TransactionService} from '../../../../services/transaction.service';
import {GetBasicDataValuesPipe} from '../../../pipes/get-basic-data-values.pipe';
import {DebagaFilterPipe} from '../../../pipes/debaga-filter.pipe';
import {PartiesFeesService} from '../../../../services/parties-fees.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-optional-data',
  templateUrl: './optional-data.component.html',
  styleUrls: ['./optional-data.component.scss'],
  providers: [GetBasicDataValuesPipe, DebagaFilterPipe]
})
export class OptionalDataComponent implements OnInit, OnDestroy {

  @Input() debagas$: Observable<any>;

   transaction: TransactionService;
   requestDebagaForm: FormGroup;
  startRequestDebagasForm: FormArray;
  requestDebaga$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectAllRequestDebaga(state));
  debaga$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectDebaga(state));
  validationTypes$: Observable<any> = this.validationMessagesService.getMessages();

  checklistSelection = new SelectionModel<FlatTree>(true /* multiple */);
  flatNodeMap: Map<FlatTree, DebagaTemplete> = new Map<FlatTree, DebagaTemplete>();
  nestedNodeMap: Map<DebagaTemplete, FlatTree> = new Map<DebagaTemplete, FlatTree>();
  treeControl: FlatTreeControl<FlatTree>;
  treeFlattener: MatTreeFlattener<DebagaTemplete, FlatTree>;
  dataSource: MatTreeFlatDataSource<DebagaTemplete, FlatTree>;

  requestId: number;
  requestDebaga: {};
  parentNodes = [];
  parentNodesIds = [];
  requestDebagaType = {};

  requestDebagas = [];
  basicRequestDebaga = [];
  basicRequestDebagaHeaders = new Set();

  basicRequestDebagaTableValues = [];
  text = '';
  debagaId: number;
  textExtension = new FormControl('');
  textResult = new FormControl({value: '', disabled: true});
  Editor = ClassicEditor;
  debagaFees = 0;
  constructor(private store: Store<fromApp.State>,
              private debagaService: DebagaService,
              private validationMessagesService: ValidationMessagesService,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private activatedRout: ActivatedRoute,
              private messageService: MessageService,
              private basicDataValuesPipe: GetBasicDataValuesPipe,
              private debagaFilter: DebagaFilterPipe) {

    this.initForms();
  }

  ngOnInit() {
    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
        this.requestId = params.requestId;
      }
    });
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FlatTree>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.startRequestDebagasForm = this.formBuilder.array([]);
    this.debagas$.subscribe(value => {
      if (value.length > 0) {
        this.dataSource.data = this.debagaFilter.transform(value, false);
      }
    });
    this.requestDebaga$.subscribe((requestDebaga: any) => {
      this.basicRequestDebaga = [];
      this.basicRequestDebagaTableValues = [];
      this.debagaFees = 0;
        if (requestDebaga && requestDebaga.length > 0) {
          requestDebaga.forEach((item, i) => {
            if (!item.groupNumber) {
              this.setRequestDebagasAfterGetRequestDetails(item);
            } else {
                  if (TransactionService.transaction.percentField && TransactionService.transaction.percentField === item.debagaTemplate.code) {
                    this.debagaFees = +item.text;
                  }
                this.basicRequestDebaga.push(item);
                this.basicRequestDebagaHeaders.add(item.debagaTemplate.description);
            }
          });
          this.basicRequestDebagaTableValues = this.basicDataValuesPipe.transform(requestDebaga, true);
          PartiesFeesService.Fees = this.debagaFees;
        }
    });
    this.debaga$.subscribe((debaga: any) => {
      if (debaga.id) {
        const exText = debaga.textExtension ? debaga.textExtension : '';
        this.debagaId = debaga.id;
        this.textExtension.setValue(exText);
        this.textResult.setValue(debaga.text ? debaga.text : '' + '\n' + exText );
      }
    });
  }
  ngOnDestroy(): void {

  }
initForms = () => {
    this.requestDebagaForm = this.formBuilder.group({});
    this.startRequestDebagasForm = this.formBuilder.array([]);
};
  transformer = (node: DebagaTemplete, level: number) => {
    const flatNode = this.nestedNodeMap.has(node) && this.nestedNodeMap.get(node).description === node.description
      ? this.nestedNodeMap.get(node)
      : {} as FlatTree;
    flatNode.id = node.id;
    flatNode.description = node.description;
    flatNode.cost = node.cost;
    flatNode.htmlCodeType = node.htmlComponentLu.code;
    flatNode.text = node.text;
    flatNode.classType = node.classType;
    flatNode.columnType = node.columnType;
    flatNode.maxValue = node.maxValue;
    flatNode.minValue = node.minValue;
    flatNode.sortOrder = node.sortOrder;
    flatNode.parentDebagaTemplateId = node.parentDebagaTemplate ? node.parentDebagaTemplate.id : null;
    flatNode.level = level;
    flatNode.expandable = !!node.childDebagaTemplates;
    flatNode.code = node.code;
    this.setNodeFormControl(flatNode);
    this.startRequestDebagasForm.push(this.formBuilder.control(this.setDebagas(node)));
    if (node.code === 'POA_EXPIRY_DATE') {
      this.requestDebagaForm.get(`${node.id}`).setValidators([Validators.required]);
      this.requestDebagaForm.get(`${node.id}`).updateValueAndValidity();
    }
    this.requestDebagaType[flatNode.id] = {htmlCodeType: flatNode.htmlCodeType,
      columnType: flatNode.columnType, description: flatNode.description};
    if (!flatNode.parentDebagaTemplateId) {
      this.parentNodes.push(flatNode);
      this.parentNodesIds.push(flatNode.id);
    }
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  itemSelectionToggle(node: FlatTree) {
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.toggle(node);
    if (this.checklistSelection.isSelected(node)) {
      this.checklistSelection.select(...descendants);
      this.treeControl.expandDescendants(node);
    } else {
      this.checklistSelection.deselect(...descendants);
      this.treeControl.collapseDescendants(node);
    }

    this.toggleCheckBoxesValues(descendants);
  }




  addOrUpdate = () => {
    this.setValues();
    if (this.requestDebagaForm.valid) {
    if (!this.debagaId) {
      this.addDebaga();
      this.addRequestDebaga();
    } else {
      this.updateDebaga();
      this.updateRequestDebaga();
    }
    setTimeout(() => {
      this.store.dispatch(GetRequestDetails({requestId: this.requestId}));
    }, 1000);
    } else {
      this.validationMessagesService.validateAllFormFields(this.requestDebagaForm);
    }
  };
  addDebaga = () => {
    let  date: any = new Date();
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const debaga = {
      data: {
        debaga: {
          request: {
            id: this.requestId
          },
          text:  this.createTable([this.basicRequestDebagaHeaders, ...this.basicRequestDebagaTableValues])  + this.text,
          textExtension: this.textExtension.value,
          textDate: date,
          textUpdate: date
        }
      }
    };
    this.debagaService.createDebaga(debaga).subscribe(res => {
      this.messageService.successMessage('تم إضافة النموذج النصي بنجاح');
    });
  };
  updateDebaga = () => {
    let  date: any = new Date();
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const debaga = {
      data: {
        debaga: {
          request: {
            id: this.requestId
          },
          id: this.debagaId,
          text: this.createTable([this.basicRequestDebagaHeaders, ...this.basicRequestDebagaTableValues]) + this.text,
          textExtension: this.textExtension.value ? this.textExtension.value : '',
          textDate: date,
          textUpdate: date
        }
      }
    };
    this.debagaService.updateDebaga(debaga).subscribe(res => {
      this.messageService.successMessage('تم تعديل النموذج النصي بنجاح');
    });
  };
  addRequestDebaga = () => {
    if (this.startRequestDebagasForm.value && this.startRequestDebagasForm.value.length > 0) {
      const requestDebaga = {
        data: {
          requestId: this.requestId,
          requestDebaga: this.startRequestDebagasForm.value
        }
      };
      this.debagaService.createRequestDebaga(requestDebaga).subscribe(res => {
        this.messageService.successMessage('تم إضافة النماذج بنجاح');
      });
    }
  };
  updateRequestDebaga = () => {
    if (this.startRequestDebagasForm.value && this.startRequestDebagasForm.value.length > 0) {
      const requestDebaga = {
        data: {
          requestId: this.requestId,
          requestDebaga: this.startRequestDebagasForm.value
        }
      };
      this.debagaService.updaterequestDebaga(requestDebaga).subscribe(res => {
        this.messageService.successMessage('تم تعديل النماذج بنجاح');
      });
    }
  };



  // draw object that used in requestDebagas for save && update andd push it to start request form
  setDebagas = (node) => {
    const requestDebaga =  {
      id: node.id,
      request: {
        id: this.requestId
      },
      debagaTemplate: {
        id: node.id,
        groupNumber: ''
      },
      sortOrder: node.sortOrder
    };
    return requestDebaga;
  };

  // set values from returned saved requestDebagas
  setRequestDebagasAfterGetRequestDetails = (node) => {
    const n = this.getParticularNode(node.debagaTemplate.id);
    if (node.debagaTemplate.htmlComponentLu.code === 'MULTIDROPDOWNLIST') {
        if (node.text) {
          if (node.text.includes('|')) {
            this.requestDebagaForm.get(`${node.debagaTemplate.id}`).patchValue(node.text.split('|'));
          } else {
            this.requestDebagaForm.get(`${node.debagaTemplate.id}`).patchValue([node.text]);
          }
          node.debagaTemplate.cost ? this.debagaFees += node.debagaTemplate.cost : this.debagaFees += 0;
        } else {
          this.requestDebagaForm.get(`${node.debagaTemplate.id}`).patchValue([]);
        }
      } else if (node.debagaTemplate.htmlComponentLu.code === 'CHECKBOX'
        || node.debagaTemplate.htmlComponentLu.code === 'GRID') {
        if (node.text === 'true') {
          this.requestDebagaForm.get(`${node.debagaTemplate.id}`).patchValue(true);
          this.checklistSelection.select(n);
          this.treeControl.expand(n);
          node.debagaTemplate.cost ? this.debagaFees += node.debagaTemplate.cost : this.debagaFees += 0;
        } else if (node.text === 'false') {
          this.requestDebagaForm.get(`${node.debagaTemplate.id}`).patchValue(false);
          this.checklistSelection.deselect(n);
          this.treeControl.collapse(n);
        }
      } else if (node.debagaTemplate.htmlComponentLu.code === 'RADIOBUTTON') {
        if (node.text && node.text == node.debagaTemplate.id) {
          this.requestDebagaForm.get(`${node.debagaTemplate.id}`).setValue(node.debagaTemplate.id);
          this.checklistSelection.select(n);
          this.treeControl.expandDescendants(n);
          node.debagaTemplate.cost ? this.debagaFees += node.debagaTemplate.cost : this.debagaFees += 0;
        } else if (node.text && node.text === 'false') {
          this.requestDebagaForm.get(`${node.debagaTemplate.id}`).patchValue(false);
          this.checklistSelection.deselect(n);
          this.treeControl.collapseDescendants(n);
          this.checklistSelection.toggle(n);
        }
      } else if (node.debagaTemplate.columnType === 'DATE') {
        const time: any = node.text ?
          moment(new Date(node.text.split('/').reverse().join('/'))).format('YYYY-MM-DD') : '';
        this.requestDebagaForm.get(`${node.debagaTemplate.id}`).patchValue(time);
        node.debagaTemplate.cost ? this.debagaFees += node.debagaTemplate.cost : this.debagaFees += 0;
        if (node.debagaTemplate.code === 'POA_EXPIRY_DATE') {
          this.store.dispatch(getExpiryDate({date: node.text}));
        }
      } else {
        node.text ? node.debagaTemplate.cost ? this.debagaFees += node.debagaTemplate.cost : this.debagaFees += 0 : this.debagaFees += 0;
        this.requestDebagaForm.get(`${node.debagaTemplate.id}`).patchValue(node.text);
      }
  };


  setValues = () => {
    let value = '';
    this.text = '';
    this.startRequestDebagasForm.value.forEach((ele, i) => {
      if (this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value) {
        if (this.requestDebagaType[ele.debagaTemplate.id].columnType === 'DATE') {
          if (typeof this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value === 'string') {
            value = this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value.split('-').reverse().join('/');
          } else {
            value = `${this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value._i.date}/${this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value._i.month+1}/${this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value._i.year}`;
          }
          this.text += this.requestDebagaType[ele.debagaTemplate.id].description + ' ' + value;
        } else if (this.requestDebagaType[ele.debagaTemplate.id].htmlCodeType === 'MULTIDROPDOWNLIST') {
          if (this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value.length > 0) {
            value = this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value.join('|');
            this.text += this.requestDebagaType[ele.debagaTemplate.id].description + ' '
              + this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value.join(' و ') + ' ';
          } else {
            value = '';
          }
        } else if (this.requestDebagaType[ele.debagaTemplate.id].htmlCodeType === 'TEXT') {
          value = this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value;
          if (value) {
            this.text += this.requestDebagaType[ele.debagaTemplate.id].description + ' ' + value + ' ';
          }
        } else if (this.requestDebagaType[ele.debagaTemplate.id].htmlCodeType === 'CHECKBOX'
          || this.requestDebagaType[ele.debagaTemplate.id].htmlCodeType === 'RADIOBUTTON') {
          value = this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value;
          if (value) {
            this.text += this.requestDebagaType[ele.debagaTemplate.id].description + ' ';
          }
        } else if (this.requestDebagaType[ele.debagaTemplate.id].htmlCodeType === 'GRID') {
          value = this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value;
        }
        this.startRequestDebagasForm.at(i).setValue(Object.assign({}, ele, {text: value}));
      }
      this.validation(ele);
    });
  };


  getOtherRadioButtons = (name, node) => {
    this.checklistSelection.select(node);
    this.treeControl.expand(node);
    const radios: any = document.getElementsByName(name);
    if (radios.length > 0) {
      for (const r of radios) {
        if (!r.checked) {
          this.requestDebagaForm.get(`${r.defaultValue}`).patchValue('');
          const nod = this.getParticularNode(+r.defaultValue);
          this.checklistSelection.deselect(nod);
          this.treeControl.collapse(nod);
          const children = this.treeControl.getDescendants(nod);
          if (children.length > 0) {
            children.forEach(ch => {
              this.requestDebagaForm.get(`${ch.id}`).patchValue('');
              this.checklistSelection.deselect(nod);
              this.treeControl.collapse(nod);
            });
          }
        }
      }
    }
  };

  toggleCheckBoxesValues = (descendants: FlatTree[]) => {
    descendants.forEach(ele => {
       this.resetNodeValue(ele);
    });
  };
  setNodeFormControl = (node: FlatTree) => {
    if (node.htmlCodeType === 'GRID' || node.htmlCodeType === 'CHECKBOX' || node.htmlCodeType === 'RADIOBUTTON') {
      this.requestDebagaForm.addControl(`${node.id}`, this.formBuilder.control(false));
    } else if (node.columnType === 'DATE') {
      this.requestDebagaForm.addControl(`${node.id}`, this.formBuilder.control(moment(new Date()).format('YYYY-MM-DD')));
    } else {
      this.requestDebagaForm.addControl(`${node.id}`, this.formBuilder.control(''));
    }
  };
  resetNodeValue = (node: FlatTree) => {
    if (!this.checklistSelection.isSelected(node)) {
    if (node.htmlCodeType === 'GRID' || node.htmlCodeType === 'CHECKBOX' || node.htmlCodeType === 'RADIOBUTTON') {
      this.requestDebagaForm.get(`${node.id}`).setValue(false);
    } else if (node.columnType === 'DATE') {
      this.requestDebagaForm.get(`${node.id}`).setValue(moment(new Date()).format('YYYY-MM-DD'));
    } else {
      this.requestDebagaForm.get(`${node.id}`).setValue('');
    }
    } else {
      if (node.htmlCodeType === 'GRID' || node.htmlCodeType === 'CHECKBOX' ) {
        this.requestDebagaForm.get(`${node.id}`).setValue(true);
      }
    }
  };
  getParticularNode = (id): FlatTree => {
    let node = null;
    this.parentNodes.forEach(n => {
      if (n.id === id) {
        node = n;
      } else {
      const descendants = this.treeControl.getDescendants(n);
      descendants.forEach(c => {
        if (c.id === id) {
          node = c;
        }
      });
    }
    });
    return node;
  };

  childrenCheck = (node) => {
    const descendants = this.treeControl.getChildren(node);
    if (descendants) {
      descendants.forEach(child => {
        const element = document.getElementById(`${child.id}`) as HTMLInputElement;
        if (element) {
          element.value = '';
          const nod = this.getParticularNode(+element.id);
          if (nod) {
            this.childrenCheck(nod);
          }
        }
      });
    }
  };
  validation = (element) => {
    let childrenValidCount = 0;
    let parentValidCount = 0;
    const n = this.getParticularNode(element.debagaTemplate.id);
    const directChildren = [];
    const chi = this.treeControl.getDescendants(n);
    chi.forEach(c => {
      if (c.level === n.level + 1) {
        directChildren.push(c);
      }
    });
    directChildren.forEach(d => {
      if (!this.requestDebagaForm.get(`${d.id}`).value && this.requestDebagaForm.get(`${element.debagaTemplate.id}`).value) {
        childrenValidCount += 1;
      } else if (this.requestDebagaForm.get(`${d.id}`).value && !this.requestDebagaForm.get(`${element.debagaTemplate.id}`).value) {
        parentValidCount += 1;
      }
    });
    if (childrenValidCount && childrenValidCount === directChildren.length) {
    directChildren.forEach(d => {
      this.requestDebagaForm.get(`${d.id}`).reset();
      this.requestDebagaForm.get(`${d.id}`).setValidators([Validators.required]);
      this.requestDebagaForm.get(`${d.id}`).updateValueAndValidity();
       });
    const el =  document.getElementById(element.debagaTemplate.id);
    el.scrollIntoView();
     } else if (parentValidCount > 1) {
      this.requestDebagaForm.get(`${element.id}`).reset();
      this.requestDebagaForm.get(`${element.id}`).setValidators([Validators.required]);
      this.requestDebagaForm.get(`${element.id}`).updateValueAndValidity();
    } else {
      directChildren.forEach(d => {
        this.requestDebagaForm.get(`${d.id}`).clearValidators();
        this.requestDebagaForm.get(`${d.id}`).updateValueAndValidity();
      });
    }
  };



   getCells(data, type) {
    const arr = Array.from(data);
    arr.reverse();
    if (type === 'th') {
    return arr.map(cell => `<${type} height="auto" style="border-collapse:collapse;border:1px solid black;font-family:Helvetica;background-color: #42569c;color: white;text-align:center; ">${cell}</${type}>`).join('');
  } else if (type === 'td') {
      return arr.map(cell => `<${type} style='border-collapse:collapse;border:1px solid black;text-align:center; '>${cell ? cell : ''}</${type}>`).join('');
    }
  };

   createBody(data) {
    return data.map(row => `<tr style='text-align:center; '>${this.getCells(Object.values(row), 'td')}</tr>`).join('');
  };

   createTable(data) {
    if (data[1] && Object.entries(data[1]).length > 0) {
    const [headings, ...rows] = data;
    rows.reverse();
    return `
    <table cellspacing='0'  width='100%'  style='border-collapse:collapse;font-family:Helvetica; font-size:12px !important; color:black;background-color:#FFFFFF; position: relative; top: 50px'><thead style="border-collapse:collapse;border:1px solid black;font-family:Helvetica;background-color: #42569c;color: white;text-align:center; "><tr style='border-collapse:collapse;width:100% !important; text-align:center;'>${this.getCells(headings, 'th')}</TR></thead><tbody>${this.createBody(rows)}</tbody> </table> </BR><STOP/>`;
  } else {
      return '';
    }
  };
  getFormControl = (id): AbstractControl => {
   return  this.requestDebagaForm.get(`${id}`);
  };
  onChangesDate = (event, code) => {
    const Exceeds = TransactionService.Exceed(`${event.value._i.date}/${event.value._i.month}/${event.value._i.year}`);
    // this.store.dispatch(getExpiryDate({date: `${event.value._i.date}/${event.value._i.month}/${event.value._i.year}`}));
    if (code === 'POA_EXPIRY_DATE' &&  Exceeds > 0) {
      this.messageService.errorMessage(`لقد تعديت مدة صلاحية التوكيل سيتم إحتساب عدد ${Exceeds + 1} مضاعف قيمة رسوم المعاملة`);
    }

  };
  startDate = (): any => {
    return moment(new Date()).format('YYYY-MM-DD');
  };
  endDate = (date, code): any => {
    const expirationPeriodCount = TransactionService.transaction.expirationPeriodCount ? TransactionService.transaction.expirationPeriodCount : 1;
    const endDate = new Date();
    if (code === 'POA_EXPIRY_DATE') {
      endDate.setMonth(endDate.getMonth() + (TransactionService.transaction.expirationPeriod * expirationPeriodCount));
    } else {
      endDate.setDate(endDate.getDate() + date);
    }
    return moment(endDate).format('YYYY-MM-DD');
  };
  getLevel = (node: FlatTree) => node.level;

  isExpandable = (node: FlatTree) => node.expandable;

  getChildren = (node: DebagaTemplete): DebagaTemplete[] => {
    return node.childDebagaTemplates ? node.childDebagaTemplates : [];
  };

  hasChild = (_: number, nodeData: FlatTree) => nodeData.expandable;


}
