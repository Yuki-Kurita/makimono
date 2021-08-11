import { auth } from "@/config/firebaseConfig";
import { uiConfig } from "@/config/firebaseUIConfig";
import { NextPage } from "next";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const SignInPage: NextPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex">
      <main className="max-w-lg w-full mx-auto my-auto px-4 py-8 bg-white rounded-lg shadow">
        <h1 className="text-center text-xl font-extrabold text-gray-600 mb-4">
          makimono
        </h1>
        <div className="text-center text-gray-600 mb-6">
          「makimono」はみんなでロードマップをシェアして学習効率を上げるサービスです。ログインして今すぐはじめよう！
        </div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </main>
    </div>
  );
};

export default SignInPage;
