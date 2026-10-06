import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  private api = inject(ApiService);
  settings: Record<string, string> = {};
  async ngOnInit() {
    try {
      this.settings = Object.fromEntries(
        (await this.api.settings()).companySettings.map((s) => [
          s.key,
          s.value,
        ]),
      );
    } catch {}
  }
}
