import { User } from "@shared";

const DEFAULT_AGE_GROUPS = {
  teenage: {
    description: "11 to 20",
    value: 0,
  },
  youthful: {
    description: "21 to 30",
    value: 0,
  },
  average: {
    description: "31 to 40",
    value: 0,
  },
  mature: {
    description: "41 to 50",
    value: 0,
  },
  elderly: {
    description: "51+",
    value: 0,
  },
};

export const getAgeGroups = (users: User[] | null) => {
  const ageGroups = users?.reduce(
    (categories, user) => {
      const {age} = user.dob;
      if (age >= 11 && age < 21) {
        return {...categories, teenage: {...categories.teenage, value: categories.teenage.value + 1}};
      }
      if (age >= 21 && age < 31) {
        return {...categories, youthful: {...categories.youthful, value: categories.youthful.value + 1}};
      }
      if (age >= 31 && age < 41) {
        return {...categories, average: {...categories.average, value: categories.average.value + 1}};
      }
      if (age >= 41 && age < 51) {
        return {...categories, mature: {...categories.mature, value: categories.mature.value + 1}};
      }
      
      if (age >= 51) {
        return {...categories, elderly: {...categories.elderly, value: categories.elderly.value + 1}};
      }
      else {
        return categories;
      }
    }, DEFAULT_AGE_GROUPS,
  );
  
  return ageGroups
    ? Object.values(ageGroups)
    : [];
};