import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAppSelector, User } from "@shared";
import { UserCard, userModel } from "@entities";
import { getFilterUsers, UserStatistic } from "@features";
import * as styles from "./index.module.scss";

export const MainContent = () => {
	const {selectUsers, selectFilterDate, selectFilter} = userModel.usersSelectors;
	
	const [ref, inView] = useInView();
	const [length, setLength] = useState(0);
	
	const users = useAppSelector(selectUsers);
	const filter = useAppSelector(selectFilter);
	const filterDate = useAppSelector(selectFilterDate);
	
	const filteredUsers = getFilterUsers(users, filter, filterDate);
	
	const reduceArr: User[] = [];
	
	filteredUsers.forEach((user, i) => {
		if (i < length) {
			reduceArr.push(user);
		}
	});
	
	useEffect(() => {
		if (inView) {
			setLength((prev) => prev + 50);
		}
	}, [inView]);
	
	return (
		<div className={styles.content}>
			<div className={styles.cards}>
				{reduceArr.map((user) => <UserCard key={user.email} user={user} />)}
				<div ref={ref} />
			</div>
			<UserStatistic users={users} />
		</div>
	);
};

