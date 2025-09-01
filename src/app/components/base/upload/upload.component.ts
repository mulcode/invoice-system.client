import { Component, inject } from '@angular/core';
import { UploadLine } from '../../../model/Upload.model';
import { CommonModule } from '@angular/common';
import { UploadService } from '../../../services/upload.service';
import { InvoiceDetails } from '../../../model/invoice.model';
import { Router } from '@angular/router';
import { InvoiceHeaderService } from '../../../services/invoice.header.service';
import { InvoiceHeader } from '../../../model/invoice.header.models';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
export class UploadComponent {
  fileContent = '';
  lines: string[] = [];
  rows: UploadLine[] = [];
  uploadService = inject(UploadService);
  invoiceDetails: InvoiceDetails[] = [];
  route = inject(Router);

  onFileSelect(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileContent = e.target.result;
        this.lines = this.fileContent.split(/[\r\n]+/);

        for (let i = 0; i < this.lines.length; i++) {
          const line = this.lines[i];

          if (line) {
            const splitted = line.split('\t');

            this.rows.push(<UploadLine>{
              property1: splitted[0],
              property2: splitted[1],
              property3: splitted[2],
              property4: splitted[3],
              property5: splitted[4],
              property6: splitted[5],
              property7: splitted[6],
              property8: splitted[7],
              property9: splitted[8],
              property10: splitted[9],
              property11: splitted[10],
              property12: splitted[11],
              property13: splitted[12],
              property14: splitted[13],
              property15: splitted[14],
            });
          }
        }

        this.uploadService.check(this.rows).subscribe({
          next: (res: InvoiceDetails[]) => {
            this.invoiceDetails = res;
          },
        });
      };
      reader.readAsText(file);
    }
  }

  uploadFile() {
    this.uploadService.upload(this.invoiceDetails).subscribe({
      next: (res) => {
        if (res.status == true) {
          this.route.navigate(['base/check'])
        }
      }
    })
    // this.service.getInvoiceHeader().subscribe({
    //   next: (response: any) => {
    //     console.log(response);
    //     this.invoiceHeaders = response;
        
    //     this.route.navigate(['base/check'])
    //   }
    // })
  }
}
