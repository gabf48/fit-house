
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  { path: 'shopping-list', 
  loadChildren: () => import('./shopping-list/shopping-list.module')
  .then(m => m.ShoppingListModule)},

  { path: 'auth',
loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  { path: 'orar',
loadChildren: () => import('./orar/orar.module').then(m => m.OrarModule)
},

{path: 'home',
loadChildren: () => import('./homefit/homefit.module').then(m => m.HomefitModule)},
  
{path: 'tarife',
loadChildren: () => import('./tarife/tarife.module').then(m => m.TarifeModule)},

{path: 'articole',
loadChildren: () => import('./articole/articole.module').then(m => m.ArticoleModule)},

{path: 'calculator',
loadChildren: () => import('./calculator/calculator.module').then(m =>m.CalculatorModule)},

{path: 'cont',
loadChildren: ()=> import('./cont/cont.module').then(m => m.ContModule)},

{path: 'echipa',
loadChildren: () => import('./echipa/echipa.module').then(m => m.EchipaModule)},

{path: 'clienti',
loadChildren: () => import('./clienti/clienti.module').then(m => m.ClinetiModule)},

{path: 'galerie',
loadChildren: () => import('./galerie/galerie.module').then(m => m.GalerieModule)},

{path: 'date-personale',
loadChildren: () => import('./cont/date-personale/date-personale.module').then(m => m.DatePersonaleModule)},

{path: 'antrenor',
loadChildren: ()=> import('./cont/antrenor/antrenor.module').then(m => m.AntrenorModule)},

{path: 'abonament',
loadChildren: ()=> import('./cont/abonament/abonament.module').then(m => m.AbonamentModule)}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    
  exports: [RouterModule]
})
export class AppRoutingModule {}
