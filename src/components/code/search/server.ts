import { Feature } from "features";
import { GetCodeSearch } from "./base";

export const useCodeSearchServer = (props: {
  feature: Feature;
}): GetCodeSearch => {
  const { feature } = props;

  const get: GetCodeSearch = (name, value) => {
    const next = new URLSearchParams();
    next.set(name, value);
    const href = `/${feature.code}?${next.toString()}`;
    return href;
  };

  return get;
};
