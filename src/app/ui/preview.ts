import { Directive } from '@angular/core';

@Directive({
  selector: '[elbPreview]',
  host: {
    class:
      'border-border flex items-center justify-center rounded-md border min-h-60 p-6 md:p-10 mt-4',
  },
})
export class Preview {}
