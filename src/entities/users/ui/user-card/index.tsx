import React from "react";
import { format } from "date-fns";
import { DATE_FORMAT, TrashIcon, useAppDispatch, User } from "@shared";
import { userSliceActions } from "../../model";
import * as styles from './index.module.scss'
import DescriptionRow from "@entities/users/ui/user-card/description-row";

interface IUserCard {
	user: User,
}

export const UserCard = ({user} : IUserCard) => {
	const dispatch = useAppDispatch()
	
	const handleSubmit = () => {
		dispatch(userSliceActions.deleteUser({value: user}));
	}
	
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imgContainer}>
				<img className={styles.img} alt='user img' src={user.picture.medium} loading='lazy' width='56' height='56'/>
				<div className={styles.nameContainer}>
					<div className={styles.name}>{`${user.name.first} ${user.name.last}`}</div>
					<div className={styles.email}>{user.email}</div>
				</div>
			</div>
			<DescriptionRow description='Phone No' value={user.phone}/>
			<DescriptionRow description='Birthday' value={format(new Date(user.dob.date), DATE_FORMAT.FULL_DATE_FULL_MONTH)}/>
			<DescriptionRow description='Address' value={`${user.location.city}, ${user.location.state}, ${user.location.country}`}/>
			<div onClick={handleSubmit} className={styles.deleteButton}>
				<TrashIcon className={styles.svg}/>
			</div>
		</div>
	);
};

