import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";

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

export default function About(): ReactElement {
  return (
    <div className="max-w-640 text-18 leading-30">
      <Head>
        <title>otf.show</title>
        <meta name="description" content="An interactive showcase of OpenType features" />
      </Head>
      <p className="text-24 leading-36 hanging-quote">
        OpenType features are like secret compartments in fonts. Unlock them and
        you’ll find ways to make fonts look and behave differently in subtle and
        dramatic ways.”
        <span> — <AboutLink href={L_ADOBE}>Adobe</AboutLink></span>
      </p>
      <p className="mt-36">
        <span className="font-semibold">otf.show is an interactive showcase of
        OpenType features.</span> We hope it helps designers and developers to
        explore and achieve better typography on the web.
      </p>
      <p className="mt-24">
        <span>This is an Open Source project. Contributions are </span>
        <AboutLink href={L_CONTRIBUTE}>more than welcome</AboutLink>
        <span>. The entire development takes place on </span>
        <AboutLink href={L_OTFSHOW}>GitHub</AboutLink>.
      </p>
      <p className="mt-24">
        <span>The project is built with </span>
        <span><AboutLink href={L_REACT}>React</AboutLink>, </span>
        <span><AboutLink href={L_NEXT}>Next.js</AboutLink>, </span>
        <span><AboutLink href={L_TYPEDTW}>Typed Tailwind</AboutLink> and </span>
        <span><AboutLink href={L_DOWNSHIFT}>Downshift</AboutLink>. </span>
        The majority of information originally comes from
        <span> <AboutLink href={L_FIGMA}>Figma</AboutLink>, </span>
        <span><AboutLink href={L_ADOBE}>Adobe</AboutLink>, </span>
        <span><AboutLink href={L_MICROSOFT}>Microsoft</AboutLink> and </span>
        <span><AboutLink href={L_WIKIPEDIA}>Wikipedia</AboutLink>.</span>
      </p>
    </div >
  )
};

interface LinkProps { href: string; children: string; }

function AboutLink({ href, children }: LinkProps): ReactElement {
  return (
    <Link
      className="underline"
      href={href}
      target="_blank"
      rel="noopener"
    >
      {children}
    </Link>
  )
};
