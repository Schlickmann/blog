import RMarkdown from "react-markdown";

export function Markdown({
  children,
  skipHtml = false,
  disallowedElements,
}: {
  children: string;
  skipHtml?: boolean;
  disallowedElements?: string[];
}) {
  return (
    <RMarkdown
      disallowedElements={disallowedElements}
      unwrapDisallowed={true}
      skipHtml={skipHtml}
    >
      {children}
    </RMarkdown>
  );
}
