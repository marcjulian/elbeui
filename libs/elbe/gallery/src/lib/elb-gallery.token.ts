import { InjectionToken, ValueProvider, inject } from '@angular/core';
import type { PhotoSwipeOptions } from 'photoswipe';

export type GalleryOptions = Omit<
  PhotoSwipeOptions,
  'gallery' | 'children' | 'pswpModule' | 'mainClass'
>;

export interface ElbGalleryConfig {
  options: GalleryOptions;
}

// adjusted lucide chevron-left icon
const leftArrowSvg = `<svg aria-hidden="true" class="pswp__icn" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path fill="none" d="m15 18-6-6 6-6"/></svg>`;
// adjusted lucide x icon
const closeSvg = `<svg aria-hidden="true" class="pswp__icn size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
// adjusted lucide zoom-in icon
const zoomSvg = `<svg aria-hidden="true" class="pswp__icn size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-in-icon lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14" class="pswp__zoom-icn-bar-v" /><line x1="8" x2="14" y1="11" y2="11"/></svg>`;

const defaultConfig: ElbGalleryConfig = {
  options: {
    arrowPrevSVG: leftArrowSvg,
    arrowNextSVG: leftArrowSvg,
    closeSVG: closeSvg,
    zoomSVG: zoomSvg,
    bgOpacity: 0.8,
    spacing: 0.1,
    allowPanToNext: true,
    loop: true,
    pinchToClose: true,
    closeOnVerticalDrag: true,
    padding: { top: 0, bottom: 0, right: 0, left: 0 },
    escKey: true,
    arrowKeys: true,
    trapFocus: true,
    returnFocus: true,
    clickToCloseNonZoomable: true,
    preloaderDelay: 2000,
    indexIndicatorSep: ' / ',
    preloadFirstSlide: true,
    counter: false,
  },
};

const ElbGalleryConfigToken = new InjectionToken<ElbGalleryConfig>('ElbGalleryConfig');

export function provideElbGalleryConfig(config: Partial<ElbGalleryConfig>): ValueProvider {
  return {
    provide: ElbGalleryConfigToken,
    useValue: { ...defaultConfig, ...config },
  };
}

export function injectElbGalleryConfig(): ElbGalleryConfig {
  return inject(ElbGalleryConfigToken, { optional: true }) ?? defaultConfig;
}
