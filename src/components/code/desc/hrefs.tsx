import { ReactElement } from "react";

function Item(props: { href: string }): ReactElement {
  const { href } = props;

  const url = new URL(href);

  const last = url.pathname.split("/").at(-1);
  if (!last) throw new Error(`No last path: ${href}`);
  const title = last
    .replaceAll("-", " ")
    .replaceAll(".html", "")
    .replaceAll("_", " ")
    .toLowerCase();

  const host = url.hostname.replaceAll("www.", "").replaceAll("en.", "");

  return (
    <li>
      <a href={href} target="_blank" className="underline capitalize">
        {title}
      </a>
      {` on ${host}`}
    </li>
  );
}

export function CodeDescHrefs(props: { hrefs: string[] }): ReactElement {
  const { hrefs } = props;

  return (
    <>
      <p>
        <strong>To learn more,</strong> see:
      </p>
      <ul className="list-disc ml-24">
        {hrefs.map((href) => (
          <Item key={href} href={href} />
        ))}
      </ul>
    </>
  );
}
