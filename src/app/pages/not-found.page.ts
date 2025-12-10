import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Layout } from '../ui/layout';

@Component({
  selector: 'elb-not-found',
  imports: [Layout],
  template: `
    <elb-layout>
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    </elb-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
