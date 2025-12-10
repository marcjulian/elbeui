import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[elbDrawerHeader],elb-drawer-header',
  host: {
    'data-slot': 'drawer-header',
    '[class]': '_computedClass()',
  },
})
export class ElbDrawerHeader {
  public readonly _userClass = input<ClassValue>('', {
    alias: 'class',
  });
  protected readonly _computedClass = computed(() =>
    hlm('flex flex-col gap-0.5 p-4 text-center md:gap-1.5', this._userClass()),
  );
}
