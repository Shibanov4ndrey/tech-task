import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Button, Input, useAppDispatch, useDebounce } from "@shared";
import { userModel } from "@entities";
import * as styles from "./index.module.scss";

export const MainActions = () => {
	const {setFilter, setFilterDate} = userModel.userSliceActions;
	const dispatch = useAppDispatch();
	const [value, setValue] = useState("");
	const [date, setDate] = useState("");
	const debouncedSearch = useDebounce(value, 500);
	const debouncedSearchDate = useDebounce(date, 500);
	
	useEffect(() => {
			dispatch(setFilter({value: debouncedSearch}));
		},
		[
			debouncedSearch,
			dispatch,
			setFilter
		],
	);
	useEffect(() => {
			dispatch(setFilterDate({value: debouncedSearchDate}));
		},
		[
			debouncedSearchDate,
			dispatch,
			setFilterDate
		],
	);
	
	const refreshPage = () => {
		window.location.reload();
	};
	
	const changeHandlerValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);
	
	const changeHandlerDate = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setDate(e.target.value);
	}, []);
	
	return (
		<div className={styles.actions}>
			<div className={styles.inputs}>
				<Input
					className={styles.input}
					placeholder="Search"
					name="filter"
					type="text"
					value={value}
					onChange={changeHandlerValue}
				/>
				<Input
					className={styles.input}
					placeholder="Search"
					name="filter"
					type="date"
					value={date}
					onChange={changeHandlerDate}
				/>
			</div>
			<Button onClick={refreshPage} className={styles.button}>Refresh Page</Button>
		</div>
	);
};

