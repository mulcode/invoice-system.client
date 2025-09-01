export interface InvoiceDetails {
  id: number;
  block: string;
  lift: string;
  postCode: string;
  loc: string;
  partCode: string;
  description: string;
  partRate: number;
  invoiceNumber: string;
  replaceDate: string;
  partLoc: string;
  partQuantity: number;
  partDiscount: number;
  rateAdjust: number;
  rebate: number;
  termType: number | null;
  invoiceDate: string;
  companyId: number;
  isDuplicate: boolean;
}