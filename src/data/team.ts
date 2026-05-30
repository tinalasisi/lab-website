// Lab members. In the shipped "grid" layout the role badge is shown and the
// group label is hidden; the `group` field drives the alternate grouped layout.
export interface Member {
  name: string;
  role: string; // full role (shown in grouped layout)
  badge: string; // short badge (shown in grid layout)
  group: string;
  photo: string;
}

export const team: Member[] = [
  {
    name: "Tina Lasisi",
    role: "Principal Investigator",
    badge: "Principal Investigator",
    group: "Principal Investigator",
    photo: "/assets/team/tina.jpg",
  },
  {
    name: "Yemko Pryor",
    role: "Postdoctoral Researcher",
    badge: "Postdoc",
    group: "Postdoctoral Researcher",
    photo: "/assets/team/yemko.jpg",
  },
  {
    name: "Paloma Contreras",
    role: "PhD Student",
    badge: "PhD Student",
    group: "PhD Students",
    photo: "/assets/team/paloma.jpg",
  },
  {
    name: "Junhui He",
    role: "Visiting PhD Student",
    badge: "Visiting PhD",
    group: "PhD Students",
    photo: "/assets/team/junhui.jpg",
  },
  {
    name: "Lily Heald",
    role: "Undergraduate Researcher",
    badge: "Undergraduate",
    group: "Undergraduate Researchers",
    photo: "/assets/team/lily.jpg",
  },
  {
    name: "Stella Booydegraaff",
    role: "Undergraduate Researcher",
    badge: "Undergraduate",
    group: "Undergraduate Researchers",
    photo: "/assets/team/stella.jpg",
  },
  {
    name: "Blair Jenkins",
    role: "Collaborator",
    badge: "Collaborator",
    group: "Collaborators",
    photo: "/assets/team/blair.jpg",
  },
];
