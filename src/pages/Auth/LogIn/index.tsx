import { Button, TextField } from "@mui/material";
import Icons from "../../../components/Icons";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(8, "Mật khẩu tối thiểu là 8 kí tự")
    .required("Vui lòng nhập mật khẩu"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(`Đăng nhập thành công`);
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
          Đăng nhập
        </h2>
        <div className="mt-4 ">
          <label className="flex pl-2">
            <Icons.Mail
              className="mt-4"
              color="#61a5fa"
              width="40"
              height="40"
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
              width="40"
              height="40"
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
        <Link to="/register">
          <p className="mt-4 text-blue-400 text-center mb-8 text-sm cursor-pointer ">
            Bạn chưa có tài khoản? Đăng ký
          </p>
        </Link>
        <div className=" flex justify-end mr-4">
          <Button variant="contained" type="submit">
            Đăng nhập
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
