import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.page').then((m) => m.HomePage),
  },
  {
    path: 'components',
    children: [
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/components/gallery/gallery.page').then((m) => m.GalleryPage),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found.page').then((m) => m.NotFoundPage),
  },
];
