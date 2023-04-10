import * as Yup from "yup";
export interface IProduct {
  id: number;
  name: string;
  price: number;
  original_price: number;
  description: string;
  images: { base_url: string }[];
  brand: { id: number; name: string; slug: string };
  specifications: ISpecification[];
}

interface ISpecification {
  name: string;
  attributes: { code: string; value: string; name: string }[];
}
export const signupChema = Yup.object({
  firtname: Yup.string().required("Error"),
  lastname: Yup.string().required("Error"),
  email: Yup.string().email("Error"),
  password: Yup.string().required("Error"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "mat khau ko khop"
  ),
});
export type SignupForm = Yup.InferType<typeof signupChema>;
export const signinChema = Yup.object({
  email: Yup.string().email("Error"),
  password: Yup.string().required("Error"),

});
export type SigninForm = Yup.InferType<typeof signinChema>;

