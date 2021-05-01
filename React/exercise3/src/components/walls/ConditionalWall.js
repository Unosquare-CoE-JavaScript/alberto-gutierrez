export function ConditionalWall({ open, children }) {
  return open ? children : <></>;
}
