import React from "react";

import Program from "./Program";
import { useAppList } from "../context/AppListState";

export default function AppRenderer() {
	const renderApps = (list) => {
		const index = list.findIndex((elem) => elem.state === "active");
		if (index !== -1) {
			return <Program app={list[index]} />;
		}
		return <></>;
	};

	const [appList] = useAppList();
	return <>{renderApps(appList)}</>;
}
