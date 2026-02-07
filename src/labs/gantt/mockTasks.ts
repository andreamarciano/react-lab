import { type EventInput} from "@fullcalendar/core";

export const resources = [
  { id: "a", title: "Team Alpha" },
  { id: "b", title: "Team Beta" },
];

export const events: EventInput[] = [
  {
    id: "1",
    resourceId: "a",
    title: "Analysis",
    start: "2026-02-05",
    end: "2026-02-08",
  },
  {
    id: "2",
    resourceId: "b",
    title: "Development",
    start: "2026-02-07",
    end: "2026-02-14",
  },
];
