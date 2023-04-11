import { getDictionary } from "get-dictionary";
import type { Locale } from "i18n-config";

const TextLangauge = ({ lng, textKey }: { lng: Locale; textKey: string }) => {
  const { messages } = getDictionary(lng);
  type recvType = {
    keys: string[];
    messages: any;
    index: number;
  };
  const recv = ({ keys = [], messages, index }: recvType): string => {
    if (keys.length === index) {
      if (typeof messages === "object") {
        return textKey;
      } else {
        return messages;
      }
    } else {
      return recv({ keys, index: index + 1, messages: messages[keys[index]] });
    }
  };
  return <div>{recv({ keys: textKey.split("."), messages, index: 0 })}</div>;
};
export default TextLangauge;
