import { CodeLink } from "./link";
import LinkList from "./link-list";

interface Props { codes: string[]; }

const Related: React.FC<Props> = ({ codes }) => {
  if (codes.length === 0) { throw new Error("related.length must be > 0"); }
  const links = codes.map(code => (
    <CodeLink key={code} value={code} label={code} />
  ));
  const prefix = "You may also be interested in";
  return <span>{prefix} <LinkList links={links} />.</span>;
};

export default Related;
