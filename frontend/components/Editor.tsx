import { Delta } from "quill";
import React, { ReactElement, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {}

export default function Editor({}: Props): ReactElement {
  const delta: Delta = {
    ops: [{ insert: "\n" }],
  } as Delta;
  const [value, setValue] = useState(delta);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      style={{ flexGrow: 1 }}
      onChange={(_content, _delta, _, editor) => {
        return setValue(editor.getContents());
      }}
    />
  );
}
