import { auth } from "@/config/firebaseConfig";
import { POST_AUTHOR } from "@/lib/graphql/postAuthorMutation";
import { useMutation } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

const RedirectPage: NextPage = () => {
  const router = useRouter();
  const [updateAuthor, { data, loading, error }] = useMutation(POST_AUTHOR);

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      var uid = user.uid;
      console.log(uid);
      try {
        await updateAuthor({
          variables: {
            author: {
              name: user?.displayName,
              iconUrl: user?.photoURL,
              firebaseId: user?.uid,
            },
          },
        });
        router.push("/");
      } catch (e) {
        console.error(error);
      }
    } else {
      // TODO: ログインできなかった場合の処理
    }
  });

  return <div>Ridirect top... </div>;
};

export default RedirectPage;
