import React from "react";
import { User } from "@shared";
import StatisticGroup from "./statistic-group";
import { getAgeGroups, getGenderGroups } from "../../index";
import * as styles from "./user-statistic.module.scss";

interface IUserStatistic {
	users: User[] | null,
}

export const UserStatistic = ({users}: IUserStatistic) => {
	
	const ageRows = getAgeGroups(users);
	const genderRows = getGenderGroups(users);
	
	return (
		<div className={styles.statContainer}>
			<div className={styles.title}>User Statistics</div>
			<hr className={styles.hr} />
			<StatisticGroup title="Age Groups" rows={ageRows} />
			<hr className={styles.hr} />
			<StatisticGroup title="Gender Groups" rows={genderRows} />
		</div>
	);
};

