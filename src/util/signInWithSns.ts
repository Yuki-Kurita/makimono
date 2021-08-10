import {
  auth,
  providerGoogle,
  providerTwitter,
} from "@/components/common/Auth/firebaseConfig";

export const signInWithSns = () => {
  auth
    .signInWithRedirect([providerTwitter, providerGoogle])
    .then((result) => {
      var credential = result.credential;

      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      var token = credential?.providerId;

      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};
