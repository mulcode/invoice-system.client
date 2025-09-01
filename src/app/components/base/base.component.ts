import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent {}
