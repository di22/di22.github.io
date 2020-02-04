export interface FlatTree {
  id: number;
  expandable: boolean;
  description: string;
  cost: number;
  htmlCodeType: string;
  classType: string;
  columnType: string;
  code: string;
  maxValue: number;
  minValue: number;
  parentDebagaTemplateId: number;
  level: number;
  text: string | boolean;
  sortOrder: number;
}
