import { ReactElement } from "react";

const Link = (props: { href: string; children: string }): ReactElement => {
  const { href, children } = props;

  return (
    <a className="underline" href={href}>
      {children}
    </a>
  );
};

const L_REACT = "https://reactjs.org/";
const L_NEXT = "https://nextjs.org/";
const L_DOWNSHIFT = "https://github.com/downshift-js/downshift/";
const L_OTFSHOW = "https://github.com/thien-do/otf/";
const L_FIGMA = "https://www.figma.com/blog/opentype-font-features/";
const L_ADOBE =
  "https://helpx.adobe.com/fonts/using/use-open-type-features.html";
const L_MICROSOFT =
  "https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags";
const L_CONTRIBUTE = "https://github.com/thien-do/otf/issues/1";
const L_WIKIPEDIA =
  "https://en.wikipedia.org/wiki/List_of_typographic_features";

const About = () => (
  <div className="max-w-640 text-18 leading-30">
    <p className="text-24 leading-36 hanging-quote">
      OpenType features are like secret compartments in fonts. Unlock them and
      you’ll find ways to make fonts look and behave differently in subtle and
      dramatic ways.”
      <span>
        {" "}
        — <Link href={L_ADOBE}>Tim Brown</Link>, Head of Typography at Adobe
      </span>
    </p>
    <p className="mt-36">
      <span className="font-semibold">
        "otf" is an interactive showcase of OpenType features.
      </span>{" "}
      We hope it helps designers and developers to explore and achieve better
      typography on the web.
    </p>
    <p className="mt-24">
      <span>This is an Open Source project. Contributions are </span>
      <Link href={L_CONTRIBUTE}>more than welcome</Link>
      <span>. The entire development takes place on </span>
      <Link href={L_OTFSHOW}>GitHub</Link>.
    </p>
    <p className="mt-24">
      <span>The project is built with </span>
      <span>
        <Link href={L_REACT}>React</Link>,{" "}
      </span>
      <span>
        <Link href={L_NEXT}>Next.js</Link>, and{" "}
      </span>
      <span>
        <Link href={L_DOWNSHIFT}>Downshift</Link>.{" "}
      </span>
      The majority of information originally comes from
      <span>
        {" "}
        <Link href={L_FIGMA}>Figma</Link>,{" "}
      </span>
      <span>
        <Link href={L_ADOBE}>Adobe</Link>,{" "}
      </span>
      <span>
        <Link href={L_MICROSOFT}>Microsoft</Link> and{" "}
      </span>
      <span>
        <Link href={L_WIKIPEDIA}>Wikipedia</Link>.
      </span>
    </p>
  </div>
);

export default About;
