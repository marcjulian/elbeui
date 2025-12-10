import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[elbDrawerTitle]',
  host: {
    'data-slot': 'drawer-title',
    '[class]': '_computedClass()',
  },
})
export class ElbDrawerTitle {
  public readonly _userClass = input<ClassValue>('', {
    alias: 'class',
  });
  protected readonly _computedClass = computed(() =>
    hlm('text-foreground font-semibold', this._userClass()),
  );
}
