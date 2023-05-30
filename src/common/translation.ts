import { getDictionary } from "get-dictionary";

type Json = string | { [property: string]: Json };

type translationType = {
  keys: string[];
  messages: Json;
  index: number;
  textKey: string;
};

export const translation = ({
  keys = [],
  messages,
  index,
  textKey,
}: translationType): string => {
  if (typeof messages === "object") {
    if (keys.length === index) {
      return textKey;
    }
    return translation({
      keys,
      messages: messages[keys[index]],
      index: index + 1,
      textKey,
    });
  } else {
    return messages;
  }
};

export const translatedText = ({
  lng,
  textKey,
}: {
  lng: string;
  textKey: string;
}) => {
  const { messages } = getDictionary(lng);
  const text = translation({
    keys: textKey.split("."),
    messages,
    index: 0,
    textKey,
  });
  return text;
};
