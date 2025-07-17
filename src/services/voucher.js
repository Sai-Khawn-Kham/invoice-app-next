import useAccountStore from "@/store/useAccountStore";

export const voucherApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/vouchers`;

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
