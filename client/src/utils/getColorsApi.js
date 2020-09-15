import axiosWithAuth from "./axiosWithAuth";

export async function getColorsApi() {
  try {
    const res = await axiosWithAuth().get("/api/colors");
    return res;
  } catch (err) {
    return console.log(err);
  }
}
