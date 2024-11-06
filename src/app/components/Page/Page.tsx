import { PropsWithChildren } from "react";
import NavBar from "../NavBar";

type PageName = 'Home' | 'Timeline' | 'Skills' | 'Contact';

interface Props extends PropsWithChildren {
  name: PageName;
}

export default function Page({ name, children }: Props) {
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-[800px] self-center">
        <NavBar />
        <div className="px-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
