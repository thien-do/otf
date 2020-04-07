import { QueryLink } from "./link";
import LinkList from "./link-list";

interface Props { texts: string[]; }

const Texts: React.FC<Props> = ({ texts }) => {
  if (texts.length === 0) { throw new Error("texts.length must be > 0"); }
  const links = texts.map(text => {
    const link = <QueryLink type="text" value={text} label={text} />;
    return <span key={text}>“{link}”</span>
  });
  return <span>Try them with text like <LinkList links={links} />.</span>;
};

export default Texts;
