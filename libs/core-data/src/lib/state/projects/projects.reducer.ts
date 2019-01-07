import { Project } from './../../projects/project.model';
import { ProjectActionsTypes } from './projects.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];

const createProject = (projects, project) => [...projects, project];
const updateProject = (projects, project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects, project) => projects.filter(w => project.id !== w.id);

// 1 Define State
export interface ProjectState extends EntityState<Project> {
  selectedProjectId: number | null;
}

// 2. Creating Adapter
export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

// 3. Define Initial State
export const intialProjectState:ProjectState = adapter.getInitialState({
  selectedProjectId: null
})

// Define Reducer
export function projectReducer(state=intialProjectState, action): ProjectState {
  switch(action.type) {
    case ProjectActionsTypes.loadProjects: {
      return adapter.addMany(action.payload, state);
    }

    case ProjectActionsTypes.selectProject: {
      return {...state, selectedProjectId: action.payload};
    }
    case ProjectActionsTypes.createProject: {
      return adapter.addOne(action.payload, state);
    }
    case ProjectActionsTypes.updateProject: {
      return adapter.updateOne(action.payload, state);
    }
    case ProjectActionsTypes.deleteProject: {
      return adapter.removeOne(action.payload, state);
    }
    default:{
      return state;
    }
  }
}
