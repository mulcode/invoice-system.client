import { InvoiceHeader } from "./invoice.header.models";
import { InvoiceDetails } from "./invoice.model";

export interface InvoiceDetailsResponse {
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
  companyName : string;
}