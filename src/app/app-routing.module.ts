import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'flashlight',
    loadChildren: () => import('./flashlight/flashlight.module').then( m => m.FlashlightPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GPSPageModule)
  },
  {
    path: 'flashlight2',
    loadChildren: () => import('./flashlight2/flashlight2.module').then( m => m.Flashlight2PageModule)
  },
  {
    path: 'flashlight3',
    loadChildren: () => import('./flashlight3/flashlight3.module').then( m => m.Flashlight3PageModule)
  },
  {
    path: 'flashlight4',
    loadChildren: () => import('./flashlight4/flashlight4.module').then( m => m.Flashlight4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
