import { format } from "date-fns";
import { DATE_FORMAT, User } from "@shared";

export const getFilterUsers = (users: User[] | null, filter: string, filterDate: string) => {
	return users?.filter((user) => {
		const userInfoToString = `${user.name.first} ${user.name.last} ${user.email} ${user.phone} ${user.location.city}, ${user.location.state}, ${user.location.country}`;
		const isSearchString = userInfoToString.toLowerCase().includes(filter.toLowerCase());
		const isSearchDate = filterDate && format(new Date(filterDate), DATE_FORMAT.FULL_DATE) ===
			format(new Date(user.dob.date), DATE_FORMAT.FULL_DATE);
		
		if (filter && filterDate) return isSearchDate && isSearchString;
		if (filter) return isSearchString;
		if (filterDate) return isSearchDate;
		return true;
	}) || [];
};