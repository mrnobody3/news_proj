import { TFunction } from "i18next"
import * as yup from "yup"

export const validationSchema = (t: TFunction<"translation", undefined>) => {
  return yup.object({
    name: yup.string().required(`${t("registerpage.yup.name.required")}`),
    email: yup
      .string()
      .email(`${t("registerpage.yup.email.invalid")}`)
      .required(`${t("registerpage.yup.email.required")}`),
    password: yup
      .string()
      .required(`${t("registerpage.yup.password.required")}`),
  })
}
