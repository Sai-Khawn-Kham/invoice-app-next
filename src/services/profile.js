export const profileApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user-profile`;

export const checkProfile = async (updateToken) => {
  return fetch(`${profileApiUrl}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${updateToken}`,
    },
  });
};