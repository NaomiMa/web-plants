import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out.");
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

  return { logout };
};
