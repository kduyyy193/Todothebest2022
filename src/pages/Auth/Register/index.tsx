import { Button, TextField } from "@mui/material";
import Icons from "../../../components/Icons";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export const validationSchema = yup.object({
  name: yup.string().required("Vui lòng nhập tên").min(1, "Tên quá ngắn"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(8, "Mật khẩu tối thiểu là 8 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  passwordConfirmation: yup
    .string()
    .required("Vui lòng xác nhận")
    .oneOf([yup.ref("password"), null], "Xác nhận mật khẩu sai"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(`Đăng ký thành công`);
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex items-center justify-center flex-col min-h-screen ">
      <form
        onSubmit={formik.handleSubmit}
        className="border border-cyan-400 rounded shadow-neutral-800 w-96"
      >
        <h2 className="h-1/5 py-4 bg-blue-400 pl-6 font-semibold text-lg text-white">
          Đăng ký
        </h2>
        <div className="mt-4 ">
          <label className="flex pl-2">
            <Icons.PersonIcon
              htmlColor="#61a5fa"
              className="mt-6 mr-2"
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
          </label>
        </div>
        <div className="mt-4 ">
          <label className="flex pl-2">
            <Icons.Mail
              className="mt-4"
              color="#61a5fa"
              width="30"
              height="30"
            />
            <TextField
              id="email"
              label="Email"
              variant="standard"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              className="w-full p-0 text-sm outline-none"
            />
          </label>
        </div>
        <div className="mt-4 ">
          <label className="flex pl-2">
            <Icons.Lock
              className="mt-4"
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              className="w-full p-0 text-sm outline-none"
            />
          </label>
        </div>
        <div className="mt-4 ">
          <label className="flex pl-2">
            <Icons.Lock
              className="mt-4"
              color="#61a5fa"
              width="30"
              height="30"
            />
            <TextField
              id="passwordConfirmation"
              label="Xác thực mật khẩu"
              type="passwordConfirmation"
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
          </label>
        </div>
        <Link to="/login">
          <p className="mt-4 text-blue-400 text-center mb-8 text-sm cursor-pointer ">
            Bạn đã có tài khoản? Đăng nhập
          </p>
        </Link>
        <div className=" flex justify-end mr-4">
          <Button variant="contained" type="submit">
            Đăng ký
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
