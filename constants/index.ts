export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Employees",
    route: "/employees",
  },
  {
    label: "Attendance",
    route: "/attendance",
  },
];

export const adminLinks = [
  {
    label: "Create Product",
    route: "/product/create",
  },
];

export const productDefaultValues = {
  title: "",
  description: "",
  imageUrl: "",
  categoryId: "",
  prizePool: "",
  entryFee: "",
  startDate: new Date(),
  endDate: new Date(),
};

export const employeeDefaultValues = {
  firstName: "",
  lastName: "",
  imageUrl: "",
  recordCardNumber: "",
  sickLeave: "",
  annualLeave: "",
  familyRelatedLeave: "",
  emergencyLeave: "",
  maternityLeave: "",
  paternityLeave: "",
  hithaaneeLeave: "",
  officialLeave: "",
  noPayLeave: "",
  joinedDate: new Date(),
};

export const teamDefaultValues = {
  name: "",
  moto: "",
  description: "",
  imageUrl: "",
  categoryId: "",
  players: "",
};

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
