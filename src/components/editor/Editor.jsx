import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

export default function Editor(props) {
  const { value, setValue } = props;

  const ToolbarOptions = [
    [{ header: [1, 2, 3, 4, false] }],
    [{ script: "super" }, { script: "sub" }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ background: [] }, { color: [] }],
    ["bold", "italic", "underline", "strike"],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ];

  return (
    <div className="editor">
      <ReactQuill
        theme="snow"
        modules={{ toolbar: ToolbarOptions }}
        value={value}
        onChange={setValue}
        placeholder="Body of the Blog..."
      />
    </div>
  );
}
