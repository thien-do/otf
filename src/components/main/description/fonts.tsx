import Link from "./link";
import LinkList from "./link-list";

interface Props { fonts: string[]; }

const Fonts: React.FC<Props> = ({ fonts }) => {
  if (fonts.length === 0) { throw new Error("fonts.length must be > 0"); }
  const links = fonts.map(font => (
    <Link key={font} type="font" value={font} label={font} />
  ));
  const prefix = fonts.length === 1
    ? "A font that have this feature is"
    : "Fonts that have this feature includes";
  return <span>{prefix} <LinkList links={links} />.</span>;
};

export default Fonts;
