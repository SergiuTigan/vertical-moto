import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path:'about',
  //   loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  // },
  // {
  //   path: 'services',
  //   loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule)
  // },
  // {
  //   path: 'add-article',
  //   component: AddArticleComponent
  // },
  // {
  //   path:'contact',
  //   loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
  // },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
