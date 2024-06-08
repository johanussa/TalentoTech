import { useEffect, useState } from "react";
import axios from "axios";

const Coffe = () => {
  const [listCoffe, setCoffeList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=1");
        setCoffeList(response.data.data);
      } catch (error) {
        console.error("Se presento un error: ", error.message);
      }
    };
    getData();
  }, []);
  return <ShowImages list={listCoffe} />;
};

const ShowImages = ({ list }) => {
  const limitPage = 4;
  const cantPages = Math.ceil(list.length / limitPage);

  const [items, setItems] = useState([]);
  const [pageActual, setPageActual] = useState(1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const startIndex = (pageActual - 1) * limitPage;
    const endIndex = startIndex + limitPage;
    setItems(list.slice(startIndex, endIndex));
  }, [list, pageActual]);

  const handlePrev = () => {
    if (pageActual > 1) setPageActual(pageActual - 1);
  };

  const handleNext = () => {
    if (pageActual < cantPages) setPageActual(pageActual + 1);
  };

  return (
    <>
      <ul className="list-group">
        {items.length !== 0 &&
          items.map((elm, pos) => (
            <li
              key={pos}
              className={`list-group-item ${pos === active && "active"}`}
              onClick={() => {setActive(pos)}}
            >
              {elm.first_name}
            </li>
          ))}
      </ul>
      <button
        type="button"
        className="btn btn-primary m-3"
        disabled={pageActual === 1}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        type="button"
        className="btn btn-primary"
        disabled={pageActual === cantPages}
        onClick={handleNext}
      >
        Next
      </button>
    </>
  );
};

export default Coffe;
