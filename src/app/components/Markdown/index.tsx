import RMarkdown from "react-markdown";
import "github-markdown-css";
import styles from "./styles.module.css";

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
      className={`markdown-body ${styles.markdown}`}
    >
      {children}
    </RMarkdown>
  );
}
