import useAccountStore from "@/store/useAccountStore";

export const voucherApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/vouchers`;

export const fetchVoucher = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());
};

export const createVoucher = (currentVoucher) => {
  return fetch(voucherApiUrl, {
    method: "POST",
    body: JSON.stringify(currentVoucher),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const deleteVoucher = (id) => {
  return fetch(`${voucherApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
      Accept: "application/json",
    },
  });
};