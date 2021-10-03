import { firebase } from "./firebaseConfig";

type UserCredential = {
  additionalUserInfo?: firebase.auth.AdditionalUserInfo | null;
  credential: firebase.auth.AuthCredential | null;
  operationType?: string | null;
  user: firebase.User | null;
};

// https://github.com/firebase/firebaseui-web
export const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/redirect",
  tosUrl: "/about",
  privacyPolicyUrl: "/explore",
  signInOptions: [
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
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
