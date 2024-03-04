import  { useState } from "react";

const Filter = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section className="my-10 py-3 w-3/5 md:4/6 mx-auto flex flex-col md:flex-row justify-around">
      <button
        className={`btnstyle ${selectedItem === 1 ? "bg-green-400 text-white" : " text-slate-500"}`}
        onClick={() => handleItemClick(1)}
      >
        Latest
      </button>
      <button
        className={`btnstyle ${selectedItem === 2 ? "bg-green-400 text-white" : "text-slate-500"}`}
        onClick={() => handleItemClick(2)}
      >
        Best seller
      </button>
      <button
        className={`btnstyle ${selectedItem === 3 ? "bg-green-400 text-white" : "text-slate-500"}`}
        onClick={() => handleItemClick(3)}
      >
        Special
      </button>
    </section>
  );
};

export default Filter;
