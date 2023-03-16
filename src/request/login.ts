import service from "."
import { LoginFormInt } from "@/type/login"
export function login(data:LoginFormInt) {
  return service({
    url: '/user/login',
    method: "post",
    data
  })
}