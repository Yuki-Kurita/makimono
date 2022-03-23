import { AdditionalUserInfo, AuthCredential, User } from "firebase/auth";
import { providerGoogle, providerTwitter } from "./firebaseConfig";

type UserCredential = {
  additionalUserInfo?: AdditionalUserInfo | null;
  credential: AuthCredential | null;
  operationType?: string | null;
  user: User | null;
};

// https://github.com/firebase/firebaseui-web
export const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/redirect",
  tosUrl: "/about",
  privacyPolicyUrl: "/explore",
  signInOptions: [providerTwitter.providerId, providerGoogle.providerId],
  // callbacks: {
  //   signInSuccessWithAuthResult: (authResult: UserCredential) => {
  //     // 新規ユーザー登録
  //     const mutation = async () => {
  //       await client.mutate({
  //         mutation: UPDATE_AUTHOR,
  //         variables: {
  //           author: {
  //             name: authResult.user?.displayName,
  //             iconUrl: authResult.user?.photoURL,
  //             firebaseId: authResult.user?.uid,
  //           },
  //         },
  //       });
  //     };
  //     mutation();
  //     return true;
  //   },
  // },
};
