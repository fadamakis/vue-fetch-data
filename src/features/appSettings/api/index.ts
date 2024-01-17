export async function fetchAppSettings() {
  return new Promise((resolve) => {
    setTimeout(resolve, 500, {
      INITIAL_COUNTER: 1,
    });
  });
}
