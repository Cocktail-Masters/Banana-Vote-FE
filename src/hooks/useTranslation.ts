import { translatedText } from "@/common/translation";
import { useParams } from "next/navigation";
import { useCallback } from "react";

const useTranslation = () => {
  const { lng } = useParams();
  const translation = useCallback(
    (textKey: string) => {
      return translatedText({ lng, textKey });
    },
    [lng]
  );
  return { translation };
};
export default useTranslation;
