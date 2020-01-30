import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path: 'singleView', component: SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
