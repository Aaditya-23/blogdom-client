import { useEffect, useRef } from "react";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css"

export default function Editor() {
  const ref = useRef();

  useEffect(() => {
    const editor = document.createElement("div");
    ref.current.append(editor);

    new Quill(editor, {
      theme: "snow",
    });

    return () => {
      ref.current.innerHTML = "";
    };
  }, []);

  return <div className="editor" ref={ref}></div>;
}
