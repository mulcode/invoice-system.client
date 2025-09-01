import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormsModule,
  Validators,
} from '@angular/forms';
import { LoginRequest } from '../../model/LoginRequest.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  fb = inject(FormBuilder);
  loginService = inject(LoginService);
  route = inject(Router)

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  submitForm() {
    let request: LoginRequest = {
      userName: this.loginForm.value.username!,
      password: this.loginForm.value.password!,
    };

    console.log(request);
    this.loginService.login(request).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == true) {
          localStorage.setItem('token', res.token,);
          localStorage.setItem('isLiftCompany', res.isLiftCompany);
          localStorage.setItem('isTc', res.isTc);
          localStorage.setItem('companyId', res.companyId);
          localStorage.setItem('tcId', res.tcId);
          localStorage.setItem('isAdmin', res.isAdmin);
          
          this.route.navigate(['/base'])
        }
      }
    })
  }
}
