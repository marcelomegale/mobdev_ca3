import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.module').then( m => m.FilmsPageModule)
  },
  {
    path: 'film-details',
    loadChildren: () => import('./pages/film-details/film-details.module').then( m => m.FilmDetailsPageModule)
  }/**,
  {
    path: 'spaceship-details',
    loadChildren: () => import('./pages/spaceship-details/spaceship-details.module').then( m => m.SpaceshipDetailsPageModule)
  } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
