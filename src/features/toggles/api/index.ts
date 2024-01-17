export async function fetchToggles() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, {
      FEATURE_1_ENABLED: true,
      FEATURE_2_ENABLED: true,
      FEATURE_3_ENABLED: false,
    });
  });
}
