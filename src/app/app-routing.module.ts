import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) }, 
  { path: 'about-me', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'hobbies', loadChildren: () => import('./about-me/hobbies/hobbies.module').then(m => m.HobbiesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
