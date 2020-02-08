import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FlatTreeControl} from '@angular/cdk/tree';
import {DebagaTemplete} from '../../../../DTO`s/debaga-templete';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTree} from '../../../../DTO`s/flatTree';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import moment from 'moment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {GetRequestDetails} from '../../../parties/party/store/request/actions/request.actions';
import {Store} from '@ngrx/store';
import {default as fromApp, State} from '../../../../store';
import {EncryptDecryptService} from '../../../../services/config/encrypt-decrypt.service';
import {ActivatedRoute} from '@angular/router';
import {addDebaga, addRequestDebaga, updateDebaga, updateRequestDebaga} from '../store/actions/request-debaga.actions';
import {Request} from '../../../../DTO`s/request';
import * as fromRequestSelectors from '../../../parties/party/store/request/selectors/request.selectors';
import * as fromRequestDebagaSelectors from '../store/selectors/request-debaga.selectors';

@Component({
  selector: 'app-optional-data',
  templateUrl: './optional-data.component.html',
  styleUrls: ['./optional-data.component.scss'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ar-AR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}]
})
export class OptionalDataComponent implements OnInit {


  requestDebagaForm: FormGroup;
  requestTextDebagaForm: FormGroup;
  @Input() debagas$: Observable<any>;
  appStore$: Observable<fromApp.State>;
  requestDebaga$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectAllRequestDebaga(state));
  debaga$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectDebaga(state));

  checklistSelection = new SelectionModel<FlatTree>(true /* multiple */);
  flatNodeMap: Map<FlatTree, DebagaTemplete> = new Map<FlatTree, DebagaTemplete>();
  nestedNodeMap: Map<DebagaTemplete, FlatTree> = new Map<DebagaTemplete, FlatTree>();
  treeControl: FlatTreeControl<FlatTree>;
  treeFlattener: MatTreeFlattener<DebagaTemplete, FlatTree>;
  dataSource: MatTreeFlatDataSource<DebagaTemplete, FlatTree>;

  requestId: number;
  requestDebaga: {};
  parentNodes = [];
  requestDebagaObj = {};
  requestDebagas: any[] = [];
  text = '';
  debagaId: number;
  textExtension = new FormControl('');
  textResult = new FormControl({value: '', disabled: true});
  Editor = ClassicEditor;
  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private activatedRout: ActivatedRoute) {
    this.initForms();
    this.requestDebaga$.subscribe((requestDebaga: any) => {
      if (requestDebaga) {
        if (requestDebaga.length > 0) {
          requestDebaga.forEach(item => {
            if (!item.groupNumber) {
              if (!this.requestDebagaObj[item.debagaTemplate.id]) {
                this.requestDebagaObj[item.debagaTemplate.id] = {
                  id: item.id, text: item.text,
                  type: item.debagaTemplate.htmlComponentLu.code,
                  columnType: item.debagaTemplate.columnType, debagaId: item.debagaTemplate.id
                };
              }
            }
          });
        }
      }
    });
  }

  ngOnInit() {
    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
        this.requestId = params.requestId;
      }
    });
    this.appStore$ = this.store.select(state => state);
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FlatTree>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.debagas$.subscribe(value => {
      const filteredValues = [];
      if (value.length > 0) {
        value.filter(type => {
          filteredValues.push(type.debagaTemplate);
        });
        this.dataSource.data = filteredValues.filter(type => type.staticTemplate === false);
      }
    });
    this.debaga$.subscribe((debaga: any) => {
      if (debaga.id) {
        this.debagaId = debaga.id;
        this.textResult.setValue(debaga.text + '\n' + debaga.textExtension ? debaga.textExtension : '');
      }
    });
  }
initForms = () => {
    this.requestDebagaForm = this.formBuilder.group({});
    this.requestTextDebagaForm = this.formBuilder.group({});
}
  transformer = (node: DebagaTemplete, level: number) => {
    const flatNode = this.nestedNodeMap.has(node) && this.nestedNodeMap.get(node).description === node.description
      ? this.nestedNodeMap.get(node)
      : {} as FlatTree;
    this.requestDebagaForm.addControl(`${node.id}`, this.formBuilder.control(false));
    this.requestTextDebagaForm.addControl(`${node.id}`, this.formBuilder.control(node));
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
    this.setRequestDebagasAfterGetRequestDetails(flatNode);
    this.setDebagas(flatNode);
    if (!flatNode.parentDebagaTemplateId) {
      this.parentNodes.push(flatNode);
    }
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  todoItemSelectionToggle(node: FlatTree) {
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.toggle(node);
    if (this.checklistSelection.isSelected(node)) {
      this.treeControl.expandDescendants(node);
    } else {
      this.treeControl.collapseDescendants(node);
    }
  }



  addOrUpdate = () => {
    this.setText();
    this.setValues();
    this.validation();
    if (!this.debagaId) {
      this.addDebaga();
      this.addRequestDebaga();
    } else {
      this.updateDebaga();
      this.updateRequestDebaga();
    }
  }
  addDebaga = () => {
    let  date: any = new Date();
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const debaga = {
      data: {
        debaga: {
          request: {
            id: this.requestId
          },
          text:  this.text,
          textExtension: this.textExtension.value,
          textDate: date,
          textUpdate: date
        }
      }
    };
    this.store.dispatch(addDebaga({debaga}));
  }
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
          text:  this.text,
          textExtension: this.textExtension.value,
          textDate: date,
          textUpdate: date
        }
      }
    };
    this.store.dispatch(updateDebaga({debaga}));
  }
  addRequestDebaga = () => {
    const requestDebaga = {
      data: {
        requestId: this.requestId,
        requestDebaga: this.requestDebagas
      }
    };
    this.store.dispatch(addRequestDebaga({requestDebaga}));
  }
  updateRequestDebaga = () => {
    const requestDebaga = {
      data: {
        requestId: this.requestId,
        requestDebaga: this.requestDebagas
      }
    };
    this.store.dispatch(updateRequestDebaga({requestDebaga}));
  }


  getOtherRadioButtons = (name, node) => {
    const radios: any = document.getElementsByName(name);
    for (const r of radios) {
      if (!r.checked) {
        this.requestDebagaForm.get(`${r.defaultValue}`).patchValue(false);
        const nod = this.getParticularNode(+r.defaultValue);
        this.checklistSelection.deselect(nod);
        this.treeControl.collapse(nod);
      }
    }
  }
  setDebagas = (node) => {
    this.requestDebaga =  {
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
    this.requestDebagas.push(this.requestDebaga);
  }
  setValues = () => {
    const requestDebagasValues = this.requestTextDebagaForm.value;
    let text = '';
    this.requestDebagas.forEach((ele, i) => {
      if (requestDebagasValues[ele.debagaTemplate.id].columnType === 'DATE') {
        text = typeof this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value === 'string' ? this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value.split('-').reverse().join('/') :
          `${this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value._i.date}/${this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value._i.month}/
          ${this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value._i.year}`;
      } else if (requestDebagasValues[ele.debagaTemplate.id].htmlComponentLu.code === 'MULTIDROPDOWNLIST') {
        text = this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value.length > 0 ?
          this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value.join('|') : '';
      } else {
        text = this.requestDebagaForm.get(`${ele.debagaTemplate.id}`).value;
      }
      ele = Object.assign({}, ele, {text});
    });
  }
  setRequestDebagasAfterGetRequestDetails = (node) => {
    if (this.requestDebagaObj[node.id]) {
      if (this.requestDebagaObj[node.id].type === 'MULTIDROPDOWNLIST') {
        if (this.requestDebagaObj[node.id].text) {
          if (this.requestDebagaObj[node.id].text.includes('|')) {
            this.requestDebagaForm.get(`${node.id}`).patchValue(this.requestDebagaObj[node.id].text.split('|'));
          } else {
            this.requestDebagaForm.get(`${node.id}`).patchValue([this.requestDebagaObj[node.id].text]);
          }
        } else {
          this.requestDebagaForm.get(`${node.id}`).patchValue([]);
        }
      } else if (this.requestDebagaObj[node.id].type === 'CHECKBOX'
        || this.requestDebagaObj[node.id].type === 'GRID') {
        if (this.requestDebagaObj[node.id].text === 'true') {
          this.requestDebagaForm.get(`${node.id}`).patchValue(true);
          this.checklistSelection.select(node);
          this.treeControl.expand(node);
        } else if (this.requestDebagaObj[node.id].text === 'false') {
          this.requestDebagaForm.get(`${node.id}`).patchValue(false);
        }
      } else if (this.requestDebagaObj[node.id].type === 'RADIOBUTTON') {
        if (this.requestDebagaObj[node.id].text) {
          this.requestDebagaForm.get(`${node.id}`).patchValue(this.requestDebagaObj[node.id].text);
          this.checklistSelection.select(node);
          this.treeControl.expand(node);
        }
      } else if (node.columnType === 'DATE') {
        const time = this.requestDebagaObj[node.id].text ?
          moment(new Date(this.requestDebagaObj[node.id].text.split('/').reverse().join('/'))).format('YYYY-MM-DD') : '';
        this.requestDebagaForm.get(`${node.id}`).patchValue(time);
      } else {
        this.requestDebagaForm.get(`${node.id}`).patchValue(this.requestDebagaObj[node.id].text);
      }
    }
  }

  setText = () => {
    this.text = '';
    this.parentNodes.forEach(node => {
      const descendants = this.treeControl.getDescendants(node);
      descendants.forEach(child => {
        if ((child.htmlCodeType === 'CHECKBOX' && this.requestDebagaForm.get(`${child.id}`).value === true)
          || (child.htmlCodeType === 'RADIOBUTTON' && this.requestDebagaForm.get(`${child.id}`).value !== false)
          || (child.htmlCodeType === 'MULTIDROPDOWNLIST' && this.requestDebagaForm.get(`${child.id}`).value.length > 0)
          || (child.htmlCodeType === 'TEXT' && this.requestDebagaForm.get(`${child.id}`).value)) {
          this.getOtherRadioButtons(child.parentDebagaTemplateId, child);
          switch (child.htmlCodeType) {
            case 'CHECKBOX' :
              this.text += child.description + ' ';
              break;
            case 'RADIOBUTTON':
              if (this.requestDebagaForm.get(`${child.id}`).value !== false) {
                this.text += child.description + ' ';
              }
              break;
            case 'MULTIDROPDOWNLIST':
              this.text += ' ' + child.description + ' ' + this.requestDebagaForm.get(`${child.id}`).value.join(' و ') + ' ';
              break;
            case 'TEXT':
              if (child.columnType === 'DATE') {
                this.text += ' '  + child.description + ' ' + this.getDate(child);
              } else {
                this.text += ' '  + child.description + ' ' + this.requestDebagaForm.get(`${child.id}`).value;
              }
              break;
            default:
              this.text += '';
              break;
          }
        }
      });
    });
  }
  getDate = (child): any => {
    if (typeof this.requestDebagaForm.get(`${child.id}`).value === 'string') {
    if (this.requestDebagaForm.get(`${child.id}`).value.includes('-')) {
      return this.requestDebagaForm.get(`${child.id}`).value.split('-').reverse().join('/');
    }
  } else {
     return `${this.requestDebagaForm.get(`${child.id}`).value._i.date}/${this.requestDebagaForm.get(`${child.id}`).value._i.month}/
          ${this.requestDebagaForm.get(`${child.id}`).value._i.year}` + ' ';
    }
  }
  getParticularNode = (id): FlatTree => {
    let node = null;
    this.parentNodes.forEach(n => {
      const descendants = this.treeControl.getDescendants(n);
      descendants.forEach(c => {
        if (c.id === id) {
          node = c;
        }
      });
    });
    return node;
  }
  childrenCheck = (node) => {
    const descendants = this.treeControl.getDescendants(node);
    if (descendants.length > 0) {
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
  }
  validation = (): boolean => {
    let isValid = true;
    this.parentNodes.forEach(node => {
      const descendants = this.treeControl.getDescendants(node);
      descendants.forEach(child => {
      if (child.htmlCodeType === 'RADIOBUTTON' || child.htmlCodeType === 'CHECKBOX') {
        if (child.text === true) {
          const ids = this.getRadioHtmlElements(child.id);
          if (ids.length > 0) {
            let count = 0;
            ids.forEach(ele => {
              const nod = this.getParticularNode(ele);
              if (!nod.text) {
                count += 1;
              }
            });
            if (ids.length === count) {
              window.alert('' + child.description);
              isValid = false;
            }
          }
        }
      }
    });
  });
    return isValid;
  }
  getRadioHtmlElements = (name): any => {
    const ids = {};
    let id = null;
    const radios = document.getElementsByName(name);
    radios.forEach((element, index) => {
      id = +element.id.slice(0, element.id.indexOf('-'));
      if (!ids[id]) {
        ids[id] = id;
      }
    });
    return ids;
  }
  showAndCalculateFees = (node) => {

  }

  onChangesDate = (event) => {

  }
  startDate = (): any => {
    return moment(new Date()).format('YYYY-MM-DD');
  }
  endDate = (date): any => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + date);
    return moment(endDate).format('YYYY-MM-DD');
  }
  getLevel = (node: FlatTree) => node.level;

  isExpandable = (node: FlatTree) => node.expandable;

  getChildren = (node: DebagaTemplete): Observable<DebagaTemplete[]> => {
    return of(node.childDebagaTemplates ? node.childDebagaTemplates : []);
  }

  hasChild = (_: number, nodeData: FlatTree) => nodeData.expandable;
}
