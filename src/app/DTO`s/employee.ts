
export interface Employee {
  activationDate: Date;
  active: boolean;
  address: string;
  addressInside: string;
  addressOutside: string;
  adminFlag: string;
  approvedBy: string;
  approvedDate: Date;
  bankId: string | number;
  customerCivilDate: Date;
  customerCivilId: string;
  customerIDType: object;
  customerName: string;
  customerNameEn: string;
  dateOfBirth: Date;
  electricNo: string | number;
  email: string;
  faxNumber: number;
  genderCode: string | number;
  id: number;
  isAvailable: boolean;
  jobTitle: string;
  landLine: number;
  loginId: string;
  mailToken: string;
  mobile1: string | number;
  mobile2: string | number;
  mortgageAvailability: string;
  nationalityType: object;
  organizationUnit: object;
  password: string;
  pendingReq: number;
  postalBox: string | number;
  qid: string;
  registered: any;
  reviewerTypeId: string;
  sourceFlag: boolean;
  stopFlag: boolean;
  stopReason: any;
  updatedBy: string;
  updatedDate: Date;
  useElectronicPortal: boolean;
  useMobileApp: boolean;
  useOSS: boolean;
  userGroups: any;
  userName: string;
}
