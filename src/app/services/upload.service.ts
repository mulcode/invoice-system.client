import { inject, Injectable } from '@angular/core';
import { HttpClientService } from '../http-service/http-client.service';
import { UploadLine } from '../model/Upload.model';
import { Observable } from 'rxjs';
import { InvoiceDetails } from '../model/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  httpService = inject(HttpClientService);
  constructor() { }

  check(uploadLine: UploadLine[]): Observable<InvoiceDetails[]> {
    return this.httpService.post(
      'http://localhost:5156/api/Invoice/check',
      uploadLine
    );
  }

  upload(invoicedetail: InvoiceDetails[]): Observable<any> {
    return this.httpService.post('http://localhost:5156/api/Invoice/create', invoicedetail);
  }

}
