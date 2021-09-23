import { auth } from "@/config/firebaseConfig";
import { client } from "@/lib/config/apolloClient";
import { UPDATE_AUTHOR } from "@/lib/graphql/updateAuthorMutation";
import { useMutation } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const RedirectPage: NextPage = () => {
  const router = useRouter();
  const [updateAuthor, { data, loading, error }] = useMutation(UPDATE_AUTHOR, {
    variables: {
      author: {
        name: auth.currentUser?.displayName,
        iconUrl: auth.currentUser?.photoURL,
        firebaseId: auth.currentUser?.uid,
      },
    },
  });
  useEffect(() => {
    updateAuthor();
    router.push("/");
  }, [router, updateAuthor]);
  return <div>Ridirect top... </div>;
};

export default RedirectPage;
