import { TFunction } from "i18next"
import * as yup from "yup"

export const validationSchema = (t: TFunction<"translation", undefined>) => {
  return yup.object({
    email: yup
      .string()
      .email(`${t("loginpage.yup.email.invalid")}`)
      .required(`${t("loginpage.yup.email.required")}`),
    password: yup.string().required(`${t("loginpage.yup.password.required")}`),
  })
}
