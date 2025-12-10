import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'elb-footer',
  imports: [],
  template: ` <footer></footer> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {}
