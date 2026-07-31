import Link from "next/link";

export const MainMenu = ({ items }) => {
  console.log("ITEMS: ", items);

  return (
    <header className="p-5 sticky h-[64px] z-20">
      <nav className="flex justify-center">
        {items.map(item => (
          <div className="group">
            <Link key={item.id} href={item.destination} className="p-5 hover:bg-slate-400">
              {item.label}
            </Link>
            {!!item.subMenuItems?.length && (
              <div className="group-hover:block hidden bg-slate-400 absolute top-full -mt-3">
                {item.subMenuItems.map(item => (
                <Link key={item.id} href={item.destination} className="hover:bg-slate-500 p-5 block whitespace-nowrap">
                  {item.label}
                </Link>
              ))}</div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}