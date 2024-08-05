import Link from "next/link";

interface Props {
  references: string[];
}

export function References({ references }: Props) {
  const getLabel = (ref: string) => {
    const urls = ref.split(/(?<=https:\/\/[^\/]+)(\/.*)/);
    const host = urls[0]
      .replace(/^https:\/\//, "")
      .replace(/^www\./, "")
      .replace(/^en\./, "");
    const path = urls[1].split("/").pop();
    return (
      <div>
        <span className="text-A0A">{host}/</span>
        <span>{path}</span>
      </div>
    );
  };
  return (
    <>
      <div>See also:</div>
      <ul className="list-disc ml-24">
        {references.map((ref) => {
          return (
            <li key={ref}>
              <Link href={ref} target="_blank">
                {getLabel(ref)}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
