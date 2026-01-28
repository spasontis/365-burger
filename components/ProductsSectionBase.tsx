import { ReactNode } from "react";

export const ProductsSectionBase = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center p-4 pb-20"
    >
      <h1 className="text-center text-7xl/12 font-bold  relative top-6 z-10">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {children}
      </div>
    </section>
  );
};
