"use client";
import { Input, Label, TextField } from "react-aria-components";
import _ from "lodash";
import styles from "./styles.module.css";

interface SearchProps {
  onSearch: (searchString: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const search = _.debounce((searchString: string) => {
    onSearch(searchString);
  }, 500);

  return (
    <TextField className={styles.textField}>
      <Label>Posts</Label>
      <Input placeholder="Search..." onChange={(e) => search(e.target.value)} />
    </TextField>
  );
}
