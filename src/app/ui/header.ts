import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'elb-header',
  imports: [RouterLink],
  template: `
    <header class="flex h-(--header-height) items-center justify-between px-4">
      <a routerLink="/" class="text-medium"> elbe/ui </a>

      <nav></nav>

      <!-- TODO link to repo -->
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
