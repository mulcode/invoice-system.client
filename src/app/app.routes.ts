import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BaseComponent } from './components/base/base.component';
import { HeaderComponent } from './components/base/header/header.component';
import { DashboardComponent } from './components/base/dashboard/dashboard.component';
import { UploadComponent } from './components/base/upload/upload.component';
import { CheckComponent } from './components/base/check/check.component';
import { ApproveComponent } from './components/base/approve/approve.component';
import { DownloadComponent } from './components/base/download/download.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'base',
    component: BaseComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'check', component: CheckComponent },
      { path: 'approve', component: ApproveComponent },
      { path: 'download', component: DownloadComponent },
    ],
  },
];
