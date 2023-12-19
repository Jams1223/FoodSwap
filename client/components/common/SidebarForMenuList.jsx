import Link from "next/link";

const SidebarForMenuList = ({ item }) => {
  return (
    <>
      <Link
        href={item.link}
        className={`text-xs font-bold text-lightblack  flex items-center justify-between py-1 mb-2  cursor-pointer `}
      >
        {item.heading}
      </Link>
    </>
  );
};

export default SidebarForMenuList;
