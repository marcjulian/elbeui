import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from './footer';
import { Header } from './header';

@Component({
  selector: 'elb-layout',
  imports: [Header, Footer],
  template: `
    <elb-header />

    <main class="mx-auto max-w-(--breakpoint-lg) px-4 pb-20">
      <ng-content />
    </main>

    <elb-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
