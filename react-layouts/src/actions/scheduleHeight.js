export const SET_SCHEDULE_HEIGHT = "SET_SCHEDULE_HEIGHT";

export function setScheduleHeight(height) {
  const token = localStorage.getItem('token');
  return {
    type: SET_SCHEDULE_HEIGHT,
    scheduleHeight: height
  }
}