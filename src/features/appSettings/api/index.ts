export async function fetchAppSettings() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, {
      INITIAL_COUNTER: 1,
    });
  });
}
