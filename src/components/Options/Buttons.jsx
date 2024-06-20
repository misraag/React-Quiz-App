export default function Button({ children, ...props }) {
  return (
    <p className="answer">
      <button {...props}>{children}</button>
    </p>
  );
}
