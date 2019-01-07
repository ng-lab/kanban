import { Project } from './../../projects/project.model';
import { Action } from '@ngrx/store';

export enum ProjectActionsTypes {
    loadProjects = '[Projects] Load Projects',
    selectProject = '[Projects] Select Project',
    createProject = '[Projects] Create Project',
    deleteProject = '[Projects] Delete Project',
    updateProject = '[Projects] Update Project'
}

export class LoadProjects implements Action {
    readonly type = ProjectActionsTypes.loadProjects;
    constructor(private payload: Project[]){}
}
export class SelectProject implements Action {
    readonly type = ProjectActionsTypes.selectProject;
    constructor(private payload: Project) {}
}

export class CreateProject implements Action {
    readonly type = ProjectActionsTypes.createProject;
    constructor(private payload: Project) {}
}

export class DeleteProject implements Action {
    readonly type = ProjectActionsTypes.deleteProject;
    constructor(private payload: Project) {}
}

export class UpdateProject implements Action {
    readonly type = ProjectActionsTypes.updateProject;
    constructor(private payload: Project) {}
}

export type ProjectActions = LoadProjects | SelectProject | CreateProject | DeleteProject | UpdateProject;