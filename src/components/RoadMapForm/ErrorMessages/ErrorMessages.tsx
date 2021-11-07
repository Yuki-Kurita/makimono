import { FormError } from "../RoadMapForm";

interface ErrorMessagesProps {
  errors: FormError;
  index: number;
}

const ErrorMessages: React.VFC<ErrorMessagesProps> = ({ errors, index }) => {
  const titleErrors: string[] = [];
  const urlErrors: string[] = [];
  const explainErrors: string[] = [];

  // if (
  //   errors?.roadmaps?.[index]?["title"] &&
  //   errors?.roadmaps?.[index]?.title?.type === "required"
  // ) {
  //   titleErrors.push("");
  // }
  return (
    <aside>
      <ul></ul>
    </aside>
  );
};

export default ErrorMessages;
