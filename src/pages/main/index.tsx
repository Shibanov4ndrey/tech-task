import React from "react";
import { useGetUsersQuery } from "@shared";
import { MainActions, MainContent } from "@widgets";
import * as styles from "./index.module.scss";
import { Loader } from "@shared/ui/loader";

const Main = () => {
	const {isLoading} = useGetUsersQuery();
	
	return (
		<div className={styles.mainContainer}>
			<MainActions />
			{isLoading
				? <div className={styles.loaderContainer}><Loader /></div>
				: <MainContent />
			}
		</div>
	);
};

export default Main;