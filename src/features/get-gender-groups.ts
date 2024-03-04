import { Gender, User } from "@shared";

const DEFAULT_GENDER_GROUPS = {
  male: {
    description: "Male",
    value: 0,
  },
  female: {
    description: "Female",
    value: 0,
  },
  notStated: {
    description: "Not Stated",
    value: 0,
  },
};

export const getGenderGroups = (users: User[] | null) => {
  const genderGroups = users?.reduce(
    (categories, user) => {
      const {gender} = user;
      if (gender === Gender.male) {
        return {...categories, male: {...categories.male, value: categories.male.value + 1}};
      }
      if (gender === Gender.female) {
        return {...categories, female: {...categories.female, value: categories.female.value + 1}};
      }
      else {
        return {...categories, notStated: {...categories.notStated, value: categories.notStated.value + 1}};
      }
    }, DEFAULT_GENDER_GROUPS,
  );
  
  return genderGroups
    ? Object.values(genderGroups)
    : [];
};