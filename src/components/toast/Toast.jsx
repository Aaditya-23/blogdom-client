import "./styles.css";

export default function Toast(props) {
  const { type, message, open, setOpen } = props;

  //   if (type === "success") return <div className="toast-success"></div>;
  //   else if (type === "error") return <div className="toast-error"></div>;

  return (
    <div className="toast">
      {type === "success" && (
        <span className="material-symbols-outlined">done</span>
      )}
      {type === "error" && (
        <span className="material-symbols-outlined">priority_high</span>
      )}

      <div className="toast-message">{message}</div>
    </div>
  );
}
