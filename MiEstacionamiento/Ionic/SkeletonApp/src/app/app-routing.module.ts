import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaguinaProtegidaGuard } from './guard/paguina-protegida.guard';
import { AngularFireAuthGuard, canActivate } from '@angular/fire/compat/auth-guard';
import { map } from 'rxjs';


const uidAdmin = '4jJ6EbX4x1NdQq0lxpFNby6VN0y1';
const onlyAdmin = () => map((user:any) => !!user && user.uid === uidAdmin );

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [PaguinaProtegidaGuard]
    //canActivate: [PaguinaProtegidaGuard]
   },
  { path: 'mapa', loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaPageModule),  canActivate: [PaguinaProtegidaGuard] },
  
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'not-foun',
    loadChildren: () => import('./pages/not-foun/not-foun.module').then( m => m.NotFounPageModule)
  },  
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule),canActivate: [PaguinaProtegidaGuard]
  },
  {
    path: 'ver-mapa',
    loadChildren: () => import('./pages/ver-mapa/ver-mapa.module').then( m => m.VerMapaPageModule),canActivate: [PaguinaProtegidaGuard]
  }, 
  {
    path: 'estacionamiento/:id',
    loadChildren: () => import('./pages/estacionamiento/estacionamiento.module').then( m => m.EstacionamientoPageModule),canActivate: [PaguinaProtegidaGuard]
  }, 
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  
  {
    path: 'aterrizaje',
    loadChildren: () => import('./pages/aterrizaje/aterrizaje.module').then( m => m.AterrizajePageModule)
  },{
    path: 'agregar-est',
    loadChildren: () => import('./pages/agregar-est/agregar-est.module').then( m => m.AgregarEstPageModule), ...canActivate(onlyAdmin)
  },

  {
    path: '**',
    loadChildren: () => import('./pages/not-foun/not-foun.module').then( m => m.NotFounPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
