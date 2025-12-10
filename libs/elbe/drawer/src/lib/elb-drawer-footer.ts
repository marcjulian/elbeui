import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[elbDrawerFooter],elb-drawer-footer',
  host: {
    'data-slot': 'drawer-footer',
    '[class]': '_computedClass()',
  },
})
export class ElbDrawerFooter {
  public readonly _userClass = input<ClassValue>('', {
    alias: 'class',
  });
  protected readonly _computedClass = computed(() =>
    hlm('mt-auto flex flex-col gap-2 p-4', this._userClass()),
  );
}
