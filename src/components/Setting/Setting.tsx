import { Button, TextField } from "@mui/material";
import Avatar from "../Avatar/Avatar";
import Icons from "../Icons";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Vui lòng nhập tên")
    .max(15, "Nhiều nhất là 15 kí tự"),

  password: yup
    .string()
    .min(8, "Mật khẩu tối thiểu là 8 ký tự")
    .required("Vui lòng nhập mật khẩu"),

  passwordConfirmation: yup
    .string()
    .required("Vui lòng xác nhận")
    .oneOf([yup.ref("password"), null], "Xác nhận mật khẩu sai"),
});
const Setting = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(`cập nhật thành công`);
      console.log(JSON.stringify(values, null, 2));
      const datas = JSON.stringify(values, null, 2);
    },
  });
  return (
    <div className="   flex-grow ">
      <div className="text-gray-500 ml-8">Settings</div>
      <div className="flex items-center justify-center relative">
        <div className="border w-96 flex flex-col items-center p-4 bg-slate-50 ">
          <Avatar />
          <form className="w-full " onSubmit={formik.handleSubmit}>
            <div className="flex items-center mt-4 ">
              <Icons.PersonIcon
                htmlColor="#61a5fa"
                className="mt-4 mr-2"
                width="50"
                height="50"
              />
              <TextField
                id="name"
                label="Tên"
                variant="standard"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className="w-full p-0 text-sm outline-none"
              />
            </div>
            <div className="flex items-center mt-4 ">
              <Icons.Lock
                className="mt-6"
                color="#61a5fa"
                width="30"
                height="30"
              />
              <TextField
                id="password"
                label="Mật khẩu"
                type="password"
                variant="standard"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                className="w-full p-0 text-sm outline-none"
              />
            </div>
            <div className="flex items-center mt-4 ">
              <Icons.Lock
                className="mt-6"
                color="#61a5fa"
                width="30"
                height="30"
              />
              <TextField
                id="passwordConfirmation"
                label="Xác thực mật khẩu"
                type="password"
                variant="standard"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                error={
                  formik.touched.passwordConfirmation &&
                  Boolean(formik.errors.passwordConfirmation)
                }
                helperText={
                  formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation
                }
                className="w-full p-0 text-sm outline-none"
              />
            </div>
            <div className="flex justify-end">
              <Button
                variant="contained"
                type="submit"
                className="!px-5 !mt-8 "
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
