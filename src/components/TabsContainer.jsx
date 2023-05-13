import React from "react";
import { Link } from "react-router-dom";

const TabsContainer = ({ tabs, active }) => {
  return (
    <div className="flex items-center justify-center gap-3 text-xl py-5">
      {tabs.map((tab) =>
        tab.title.replace(/\s/g, "").toLowerCase() === active ? (
          <Link
            key={tab.title}
            className="py-3 border-b-4 border-red-500"
            to={tab.link}
            title={tab.title}
          >
            {tab.title}
          </Link>
        ) : (
          <Link
            key={tab.title}
            className="py-3 border-b-4 border-transparent"
            to={tab.link}
            title={tab.title}
          >
            {tab.title}
          </Link>
        )
      )}
    </div>
  );
};

export default TabsContainer;
