import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'', component: SkeletonComponent,
    children:[
      {
        path: 'home',
        loadChildren:() =>
          import('@modules/home/home.module').then( (m)=> m.HomeModule)
      },
      { path:'**', redirectTo: '/home', pathMatch: 'full' },
    ]
  },
  { path:'**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
