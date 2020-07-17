import React, { useReducer, useContext } from "react";

export const AppListContext = React.createContext([]);

export const AppListProvider = ({ reducer, initState, children }) => {
	return (
		<AppListContext.Provider value={useReducer(reducer, initState)}>
			{children}
		</AppListContext.Provider>
	);
};

export const useAppList = () => useContext(AppListContext);
