import { firebase } from "./firebaseConfig";

export const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/",
  tosUrl: "/about",
  privacyPolicyUrl: "/explore",
  signInOptions: [
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};
