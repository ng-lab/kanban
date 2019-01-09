import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCustomers from './customers/customers.reducer';
import * as fromProjects from './projects/projects.reducer';

export interface AppState {
  customers: fromCustomers.CustomersState,
  projects: fromProjects.ProjectState
}

export const reducers: ActionReducerMap<AppState> = {
  customers: fromCustomers.customersReducer,
  projects: fromProjects.projectReducer
};

// -------------------------------------------------------------------
// CUSTOMERS SELECTORS
// -------------------------------------------------------------------
export const selectCustomersState = createFeatureSelector<fromCustomers.CustomersState>('customers');

export const selectAllCustomers = createSelector(
  selectCustomersState,
  fromCustomers.selectAllCustomers
);

// -------------------------------------------------------------------
// PROJECT SELECTORS
// -------------------------------------------------------------------

export const selectProjectState = createFeatureSelector<fromProjects.ProjectState>('projects');

export const selectAllProjects = createSelector(selectProjectState, fromProjects.selectAllProjectsState);
export const selectAllProjectIds = createSelector(selectProjectState, fromProjects.selectProjectIdsState);
export const selectAllProjectEntities = createSelector(selectProjectState, fromProjects.selectProjectEntitiesState);
export const getError = createSelector(selectProjectState, fromProjects.errorState);

