import RMarkdown from "react-markdown";
import styles from "./styles.module.css";
import "github-markdown-css";

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
