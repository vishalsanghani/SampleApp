import React from "react";
import _ from "lodash";
import { AllHandlers } from "../modules/Handlers";

/**
 * bind the handlers
 */
export const actionMiddleware = args => {
    return ({ dispatch, getState }) => next => action => {
        const handlers = AllHandlers[action.type];
        _.defer(() => {
        });

        const nextResult = next(action);

        _.forEach(handlers, handler => {
            handler({ dispatch, payload: action.payload, appState: getState() });
        });

        return nextResult;
    };
};

export default actionMiddleware;
