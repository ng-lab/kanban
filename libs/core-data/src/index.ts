export { AuthGuardService } from './lib/auth/auth-guard.service';
export { AuthService } from './lib/auth/auth.service';
export { CoreDataModule } from './lib/core-data.module';
export { NotificationsService } from './lib/notifications/notifications.service';
export { CustomersService } from './lib/customers/customers.service';
export { Customer } from './lib/customers/customer.model';
export { Project } from './lib/projects/project.model';
export { ProjectsService } from './lib/projects/projects.service';
export { CustomersFacade } from './lib/state/customers/customers.facade';

// From Reducer
export { ProjectState, initialProjects } from './lib/state/projects/projects.reducer';
export { SelectProject, CreateProject, UpdateProject, DeleteProject, LoadProjects  } from './lib/state/projects/projects.actions';
