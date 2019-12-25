import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '../app/routes/routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
