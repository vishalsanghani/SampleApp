import React from 'react';
import * as NavigationService from "react-navigation";
import {createAction} from "../../internal/AppUtils";

export const ModuleEvents = {
    NAVIGATE: 'NAVIGATE',
}

export default {
    navigate: createAction(ModuleEvents.NAVIGATE, (view, navigateData) => {
        NavigationService.navigate(view,navigateData)
    }),
};
