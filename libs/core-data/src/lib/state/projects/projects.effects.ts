import { Project } from './../../projects/project.model';
import { ProjectsService } from './../../projects/projects.service';
import { ProjectActionsTypes, ProjectActions, LoadProjects, LoadProjectsSuccess, LoadProjectsFail } from './projects.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { ProjectState } from './projects.reducer';
import { of } from 'rxjs';


@Injectable()
export class ProjectsEffects {
  @Effect()
  loadCustomers$ = this.dataPersistence.fetch(ProjectActionsTypes.LOAD_PROJECTS, {
    run: (action: LoadProjects, state: ProjectState) => {
      return this.ProjectsService.all().pipe(map((res: Project[]) => new LoadProjectsSuccess(res)))
    },

    onError: (action: LoadProjects, error) => {
      return of(new LoadProjectsFail(error.statusText))
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProjectState>,
    private ProjectsService: ProjectsService
  ) {}
}
