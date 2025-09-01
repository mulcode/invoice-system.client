import { Component, inject, OnInit } from '@angular/core';
import { InvoiceHeaderService } from '../../../services/invoice.header.service';
import { InvoiceHeader } from '../../../model/invoice.header.models';
import { NgForOf } from '@angular/common';
import { InvoiceDetailsResponse } from '../../../model/invoice.details.response';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './check.component.html',
  styleUrl: './check.component.css'
})
export class CheckComponent implements OnInit {
  service = inject(InvoiceHeaderService);
  invoiceHeaders: InvoiceHeader[] = [];
  invoiceDetailsRes: InvoiceDetailsResponse[] = [];

  ngOnInit(): void {
    this.getHeader();
  }

  getHeader() {
    this.service.getInvoiceHeader().subscribe({
      next: (res: any) => {   
        this.invoiceHeaders = res;
      }
    })
  }

  headerByInvoiceNumber(invoiceNumber: string) {
    this.service.getHeaderByInvoiceNumber(invoiceNumber).subscribe({
      next: (response: InvoiceDetailsResponse[]) => {
        this.invoiceDetailsRes = response;
      }
    })
  }
}
