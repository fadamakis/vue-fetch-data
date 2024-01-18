export async function authenticateWithToken() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, {
      fullname: "Fotis Adamakis",
      username: "@fadamakis",
      avatar:
        "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_400x400.jpg",
    });
  });
}
