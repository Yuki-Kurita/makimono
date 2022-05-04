import { auth } from "@/config/firebaseConfig";
import { POST_AUTHOR } from "@/lib/graphql/author/postAuthorMutation";
import { useMutation } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

const RedirectPage: NextPage = () => {
  const router = useRouter();
  const [postAuthor] = useMutation(POST_AUTHOR);

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      try {
        await postAuthor({
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
        router.push("/system-error");
      }
    }
  });

  return <div>Ridirect top... </div>;
};

export default RedirectPage;
