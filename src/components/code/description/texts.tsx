import Link from "./link";
import LinkList from "./link-list";

interface Props { texts: string[]; }

const Texts: React.FC<Props> = ({ texts }) => {
  if (texts.length === 0) { throw new Error("texts.length must be > 0"); }
  const links = texts.map(text => (
    <Link key={text} type="text" value={text} label={`“${text}”`} />
  ));
  const prefix = texts.length === 1
    ? "A text that highlights this feature is"
    : "Texts that highlight this feature includes";
  return <span>{prefix} <LinkList links={links} />.</span>;
};

export default Texts;
