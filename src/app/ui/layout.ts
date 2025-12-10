import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from './footer';
import { Header } from './header';

@Component({
  selector: 'elb-layout',
  imports: [Header, Footer],
  template: `
    <elb-header />

    <main>
      <ng-content />
    </main>

    <elb-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
