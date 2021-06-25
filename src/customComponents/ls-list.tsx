import { useEffect } from "react";

export const LsList: React.FC<{ next: () => void }> = ({ next }) => {
  useEffect(() => {
    setTimeout(() => {
      next();
    }, 1000);
  }, []);
  const items = [
    "about.txt",
    "projects.md",
    "card.md",
    "help.txt",
    "resume.pdf",
  ];
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-4 p-0" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
