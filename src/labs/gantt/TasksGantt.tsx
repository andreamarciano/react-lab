import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";

import { events, resources } from "./mockTasks";

export function Gantt() {
  return (
    <FullCalendar
      plugins={[resourceTimelinePlugin, interactionPlugin]}
      initialView="resourceTimelineWeek"
      height="auto"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "resourceTimelineDay,resourceTimelineWeek",
      }}
      resources={resources}
      events={events}
      editable
      selectable
    />
  );
}
