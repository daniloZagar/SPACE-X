import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './launches.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesComponent,
  },
];
export const LaunchesRoutingModule = RouterModule.forChild(routes);
