import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './launches.component';
import { LaunchesDetailsComponent } from './launches-details/launches-details.component';
import { RouterModule } from '@angular/router';
import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesDirective } from 'src/app/shared/directives/launches.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchesDetailsComponent,
    LaunchesDirective,
    
  ],
  imports: [CommonModule,ReactiveFormsModule,RouterModule, LaunchesRoutingModule],
})
export class LaunchesModule {}
