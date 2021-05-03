export function Title({ children }: TitleType) {
  return <h1>{children}</h1>;
}

type TitleType = { children: any };
