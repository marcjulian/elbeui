import { Directive } from '@angular/core';

@Directive({
  selector: '[elbPreview]',
  host: {
    class: 'border-border flex items-center rounded-md border p-6 md:p-10 mt-4',
  },
})
export class Preview {}
