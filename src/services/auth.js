export const login = (data) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const registerAccount = (data) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
