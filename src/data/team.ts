/**
 * Leadership shown on the Firm page.
 * Optional: add `linkedin` (full https:// URL) and `photo` (e.g. "/photos/team/rohan.jpg",
 * a 4:5 portrait placed in /public/photos/team/). Empty values are simply not shown.
 */
export type TeamMember = {
  name: string;
  role: string;
  linkedin?: string;
  photo?: string;
};

export const team: TeamMember[] = [
  { name: "Rohan Sesetti", role: "Chief Executive Officer", linkedin: "", photo: "" },
  { name: "Matthew Copeland", role: "Managing Partner", linkedin: "", photo: "" },
  { name: "Luis Matadoro", role: "Venture Partner", linkedin: "", photo: "" },
];
