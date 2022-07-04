import { settingsReducerEnum } from '../constants';
import { initialSettingsStateType, SettingsActionsTypes } from '../types';

export const initialSettingsState = {
  panelVisibility: false,
};

export const settingsReducer = (
  state: initialSettingsStateType = initialSettingsState,
  action: SettingsActionsTypes,
): initialSettingsStateType => {
  switch (action.type) {
    case settingsReducerEnum.SET_PANEL_VISIBILITY: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
