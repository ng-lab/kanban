import { Project } from './../../projects/project.model';
import { Action } from '@ngrx/store';

export enum ProjectActionsTypes {
    LOAD_PROJECTS = '[Projects] Load Projects',
    LOAD_PROJECTS_SUCCESS = '[Projects] Load Projects Success',
    LOAD_PROJECTS_FAIL = '[Projects] Load Projects Fail',
    selectProject = '[Projects] Select Project',
    createProject = '[Projects] Create Project',
    deleteProject = '[Projects] Delete Project',
    updateProject = '[Projects] Update Project'
}

export class LoadProjects implements Action {
    readonly type = ProjectActionsTypes.LOAD_PROJECTS;
}

export class LoadProjectsSuccess implements Action {
    readonly type = ProjectActionsTypes.LOAD_PROJECTS_SUCCESS;
    constructor(private payload: Project[]){}
}

export class LoadProjectsFail implements Action {
    readonly type = ProjectActionsTypes.LOAD_PROJECTS_FAIL;
    constructor(private payload: string){}
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

export type ProjectActions = LoadProjects | LoadProjectsSuccess | LoadProjectsFail | SelectProject | CreateProject | DeleteProject | UpdateProject;