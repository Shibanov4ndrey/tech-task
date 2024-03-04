import React from "react";
import * as styles from './index.module.scss'

export interface IStatisticRow {
	description: string,
	value: string
}

const DescriptionRow = ({ description, value} : IStatisticRow) => {

	return (
		<div className={styles.descriptionContainer}>
			<div className={styles.description}>{description}</div>
			<div className={styles.text}>{value}</div>
		</div>
	);
};

export default DescriptionRow;
