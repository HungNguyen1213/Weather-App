import { useContext } from "react";
import { Context, TimeContext } from "./Context";

export function useStore() {
  return useContext(Context);
}
export function useTime() {
  return useContext(TimeContext);
}
