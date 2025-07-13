import useAccountStore from "@/store/useAccountStore";

export const productApiUrl = process.env.NEXT_PUBLIC_API_URL + "/products";

export const fetchProduct = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());
};

export const deleteProduct = (id) => {
  return fetch(`${productApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
      Accept: "application/json",
    },
  });
};

export const createProduct = (data) => {
  return fetch(productApiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateProduct = (id, data) => {
  return fetch(`${productApiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};