import React from "react";
import * as styles from './index.module.scss'

export interface IStatisticRow {
	description: string,
	value: number
}

const StatisticRow = ({ description, value} : IStatisticRow) => {
	return (
		<div className={styles.rowContainer}>
			<div className={styles.description}>{description}</div>
			<div className={styles.value}>{`${value} users`}</div>
		</div>
	);
};

export default StatisticRow;
