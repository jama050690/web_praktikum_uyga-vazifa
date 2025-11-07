function loadState(key) {
  try {
    const serializedState = localStorage.getItem(key);

    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

function saveState(key, state) {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(key, serializedState);
  } catch (e) {}
}
