import { InferActionTypes } from 'redux/types';
import { settingsActions } from '../settingsActions';
import { initialSettingsState } from '../settingsReducer/settingsReducer';

export type initialSettingsStateType = typeof initialSettingsState;

export type SettingsActionsTypes = InferActionTypes<typeof settingsActions>;
