import {NavigationActions} from 'react-navigation';

let navigator;
const setTopLevelNavigator = (navigatorRef) => {
    navigator = navigatorRef;
};
const navigate = (routeName, params) => {
    console.log(routeName)
    navigator.dispatch(NavigationActions.navigate({type: NavigationActions.NAVIGATE, routeName, params,}));
};

export default {
    navigate,
    setTopLevelNavigator
}
