import "./bigText.css";

type bigTextChildren = {
  children: string;
};

export function BigText({ children }: bigTextChildren) {
  return (
    <>
      <h1 className="bigText">{children}</h1>
    </>
  );
}
