import { NextPage } from "next";
import Head from "next/head";

import { Tw } from "styles";

interface LinkProps { href: string; children: string; }

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a
    className={Tw().underline().$()}
    href={href} target="_blank" rel="noopener"
  >{children}</a>
);

const L_REACT = "https://reactjs.org/";
const L_NEXT = "https://nextjs.org/";
const L_DOWNSHIFT = "https://github.com/downshift-js/downshift/";
const L_TYPEDTW = "https://github.com/thien-do/typed-tailwind";
const L_OTFSHOW = "https://github.com/thien-do/otf/";
const L_FIGMA = "https://www.figma.com/blog/opentype-font-features/";
const L_ADOBE = "https://helpx.adobe.com/fonts/using/use-open-type-features.html";
const L_MICROSOFT = "https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags";
const L_CONTRIBUTE = "https://github.com/thien-do/otf/issues/1";
const L_WIKIPEDIA = "https://en.wikipedia.org/wiki/List_of_typographic_features";

const bold = Tw().fontSemibold().$();

const About: NextPage = () => (
  <div className={Tw().maxW640().text18().leading30().$()}>
    <Head>
      <title>otf.show</title>
      <meta name="description" content="An interactive showcase of OpenType features" />
    </Head>
    <p className={Tw().text24().leading36().$() + " hanging-quote"}>
      OpenType features are like secret compartments in fonts. Unlock them and
      you’ll find ways to make fonts look and behave differently in subtle and
      dramatic ways.”
      <span> — <Link href={L_ADOBE}>Adobe</Link></span>
    </p>
    <p className={Tw().mt36().$()}>
      <span className={bold}>otf.show is an interactive showcase of
      OpenType features.</span> We hope it helps designers and developers to
      explore and achieve better typography on the web.
    </p>
    <p className={Tw().mt24().$()}>
      <span>This is an Open Source project. Contributions are </span>
      <Link href={L_CONTRIBUTE}>more than welcome</Link>
      <span>. The entire development takes place on </span>
      <Link href={L_OTFSHOW}>GitHub</Link>.
    </p>
    <p className={Tw().mt24().$()}>
      <span>The project is built with </span>
      <span><Link href={L_REACT}>React</Link>, </span>
      <span><Link href={L_NEXT}>Next.js</Link>, </span>
      <span><Link href={L_TYPEDTW}>Typed Tailwind</Link> and </span>
      <span><Link href={L_DOWNSHIFT}>Downshift</Link>. </span>
      The majority of information originally comes from
      <span> <Link href={L_FIGMA}>Figma</Link>, </span>
      <span><Link href={L_ADOBE}>Adobe</Link>, </span>
      <span><Link href={L_MICROSOFT}>Microsoft</Link> and </span>
      <span><Link href={L_WIKIPEDIA}>Wikipedia</Link>.</span>
    </p>
  </div >
);

export default About;
