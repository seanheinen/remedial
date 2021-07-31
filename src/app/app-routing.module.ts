import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/feature/not-found/not-found';

const routes: Routes = [
  // { path: '', component: HomeComponent }
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AppRoutingModule { }
