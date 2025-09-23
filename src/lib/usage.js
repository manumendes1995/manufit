export function setStartDateIfMissing() {
  if (!localStorage.getItem("dataInicio")) {
    localStorage.setItem("dataInicio", new Date().toISOString());
  }
}
export function getDaysSinceStart() {
  const d = localStorage.getItem("dataInicio");
  if (!d) return null;
  const start = new Date(d);
  const now = new Date();
  return Math.floor((now - start) / (1000 * 60 * 60 * 24));
}
export function getDaysToUnlock(daysNeeded = 30) {
  const d = getDaysSinceStart();
  if (d === null) return daysNeeded;
  return Math.max(daysNeeded - d, 0);
}
