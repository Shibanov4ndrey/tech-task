import React from "react";
import StatisticRow from "./statictic-row";
import * as styles from "./index.module.scss";

interface IStatisticGroup {
	title: string,
	rows: {
		description: string,
		value: number
	}[]
}

const StatisticGroup = ({title, rows}: IStatisticGroup) => {
	return (
		<div className={styles.groupContainer}>
			<div className={styles.subtitle}>{title}</div>
			<div className={styles.row}>
				{rows.map((row) => {
					return <StatisticRow key={row.description} value={row.value} description={row.description} />;
				})}
			</div>
		</div>
	);
};

export default StatisticGroup;
