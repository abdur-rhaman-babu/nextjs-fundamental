"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    const searchQuery = { search };
    const queryParams = new URLSearchParams(searchQuery)
    const url = `${pathName}?${queryParams}`;
    router.push(url)
  }, [pathName,router,search]);
  return (
    <div>
      <div className="text-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search here"
          className="border-2 mt-10 ml-10 py-1"
        />
      </div>
    </div>
  );
};

export default MealSearchInput;
