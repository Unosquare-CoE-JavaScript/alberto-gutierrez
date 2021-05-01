export function Header({ title, children }) {
  return (
    <header className="header">
      <div>{title}</div>
      {children}
    </header>
  );
}
