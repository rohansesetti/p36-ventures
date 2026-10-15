export type Office = {
  name: string;
  region: string;
};

/** Cities where the team works (P36 is US-based; these are not all registered offices). */
export const offices: Office[] = [
  { name: "New York", region: "United States" },
  { name: "Miami", region: "United States" },
  { name: "London", region: "United Kingdom" },
  { name: "Delhi", region: "India" },
];
