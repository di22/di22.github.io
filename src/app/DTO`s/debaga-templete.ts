export interface DebagaTemplete {
  id: number;
  code: string;
  description: string;
  sortOrder: number;
  text: string;
  buttonGroup: any;
  virtualGroup: any;
  parentDebagaTemplate: any;
  htmlComponentLu: any;
  childDebagaTemplates: DebagaTemplete[];
  staticTemplate: boolean;
  classType: any;
  columnType: string;
  maxValue: number;
  minValue: number;
  required: boolean;
  descriptionEn: string;
  textEn: string;
  textData: any;
  expiredMonths: number;
  cost: number;
}
