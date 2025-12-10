import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Layout } from '../../../ui/layout';
import { GalleryPreview } from './gallery.preview';

@Component({
  selector: 'elb-gallery-page',
  imports: [GalleryPreview, Layout],
  template: `
    <elb-layout>
      <div class="mx-auto max-w-3xl px-4">
        <h1>Gallery</h1>
        <p class="text-muted-foreground">A image gallery with image zoom and swipe</p>

        <div class="border-border flex items-center rounded-md border p-10">
          <elb-gallery-preview />
        </div>

        <h2>About</h2>
        <p>
          The gallery componnet is built using
          <a href="https://photoswipe.com/" target="_blank">photoswipe</a> library.
        </p>
      </div>
    </elb-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryPage {}
