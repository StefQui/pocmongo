import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region-my-suffix',
        data: { pageTitle: 'pocmongoApp.region.home.title' },
        loadChildren: () => import('./region-my-suffix/region-my-suffix.routes'),
      },
      {
        path: 'country-my-suffix',
        data: { pageTitle: 'pocmongoApp.country.home.title' },
        loadChildren: () => import('./country-my-suffix/country-my-suffix.routes'),
      },
      {
        path: 'location-my-suffix',
        data: { pageTitle: 'pocmongoApp.location.home.title' },
        loadChildren: () => import('./location-my-suffix/location-my-suffix.routes'),
      },
      {
        path: 'department-my-suffix',
        data: { pageTitle: 'pocmongoApp.department.home.title' },
        loadChildren: () => import('./department-my-suffix/department-my-suffix.routes'),
      },
      {
        path: 'task-my-suffix',
        data: { pageTitle: 'pocmongoApp.task.home.title' },
        loadChildren: () => import('./task-my-suffix/task-my-suffix.routes'),
      },
      {
        path: 'employee-my-suffix',
        data: { pageTitle: 'pocmongoApp.employee.home.title' },
        loadChildren: () => import('./employee-my-suffix/employee-my-suffix.routes'),
      },
      {
        path: 'job-my-suffix',
        data: { pageTitle: 'pocmongoApp.job.home.title' },
        loadChildren: () => import('./job-my-suffix/job-my-suffix.routes'),
      },
      {
        path: 'job-history-my-suffix',
        data: { pageTitle: 'pocmongoApp.jobHistory.home.title' },
        loadChildren: () => import('./job-history-my-suffix/job-history-my-suffix.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
