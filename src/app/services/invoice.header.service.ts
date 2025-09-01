import { inject, Injectable } from '@angular/core';
import { HttpClientService } from '../http-service/http-client.service';
import { InvoiceDetailsResponse } from '../model/invoice.details.response';

@Injectable({
  providedIn: 'root'
})
export class InvoiceHeaderService {
  httpClient = inject(HttpClientService);
  baseUrl = "http://localhost:5156/api/Invoice";

  constructor() { }

  getInvoiceHeader() {
    return this.httpClient.get('http://localhost:5156/api/Invoice/getHeader')
  }

  getHeaderByInvoiceNumber(invoiceNumber: string)  {
    return this.httpClient.get<InvoiceDetailsResponse[]>(`${this.baseUrl}/getHeader/${encodeURIComponent(invoiceNumber)}`)
  }
}
