import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './components/launches/launches.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/launches/launches.module').then(
        (m) => m.LaunchesModule
      ),
  },
];
export const AppRoutingModule = RouterModule.forRoot(routes);
