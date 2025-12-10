import { computed, Directive, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[elbDrawerDescription]',
  host: {
    'data-slot': 'drawer-description',
    '[class]': '_computedClass()',
  },
})
export class ElbDrawerDescription {
  public readonly _userClass = input<ClassValue>('', {
    alias: 'class',
  });
  protected readonly _computedClass = computed(() =>
    hlm('text-muted-foreground text-sm', this._userClass()),
  );
}
