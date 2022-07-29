import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useEffect, memo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { updateAvatar } from "../../features/UpdateAvatar/UpdateAvatarSlice";

const Avatar = () => {

  const dispath = useAppDispatch();
  // const [avatar, setAvatar] = useState("https://picsum.photos/200/300");
  const  avatar = useAppSelector(state => state.updateAvartar.path)


  // useEffect(() => {
  //
  //   return () => {
  //     avatar && URL.revokeObjectURL(avatar);
  //   };
  // }, [avatar]);

  const handleChangeAvt = (e: any) => {
    const img = e.target.files[0];
    img.preview = URL.createObjectURL(img);
    // setAvatar(img.preview)
    dispath(updateAvatar(img.preview))
  };

  return (
    <div className="avatar-wrapper">
      <label htmlFor="upload">
        {avatar && <img className="profile-pic object-cover " src={avatar} />}
        <div className="upload-button">
          <CameraAltIcon className="icon-avatar" />
        </div>
      </label>
      <input
        id="upload"
        className="file-upload hidden"
        onChange={handleChangeAvt}
        type="file"
        accept="image/*"
      />
    </div>
  );
};
export default memo(Avatar);
