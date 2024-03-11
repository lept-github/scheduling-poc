
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
    resourceId: 'a',
  },
  {
    id: createEventId(),
    title: 'Task 1',
    start: todayStr + 'T12:00:00',
    resourceId: 'b',
  },
  {
    id: createEventId(),
    title: 'Task 2',
    start: todayStr + 'T14:00:00',
    resourceId: 'c',
  }
]

export function createEventId() {
  return String(eventGuid++)
}
