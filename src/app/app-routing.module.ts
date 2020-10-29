import { NgModule } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute, ParamMap } from '@angular/router';
import { from } from 'rxjs';

import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './profile/education/education.component';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'profile',
  children: [
  {path:'', component:ProfileComponent},
  {path:'education', component:EducationComponent}
  ]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
