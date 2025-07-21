"use client";
import { LuCamera } from "react-icons/lu";
import useChangeImage from "../hooks/useChangeImage";

const ChangeImageBtn = () => {
  const { handleChangeImage } = useChangeImage();
  return (
    <>
      <label
        htmlFor="update-profile-image"
        className="absolute right-0 bottom-0 size-8 flex justify-center items-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
      >
        <LuCamera size={16} />
      </label>
      <input
        type="file"
        id="update-profile-image"
        className="hidden"
        onChange={handleChangeImage}
      />
    </>
  );
};

export default ChangeImageBtn;
