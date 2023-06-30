import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./Menu";

function App() {
  const [items, setItems] = useState(Menu);

  return (
    <>
      <h1 className="font-bold text-[64px] mb-10">Dietz</h1>
      <div className="flex gap-2 mb-5">
        <h3
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() =>
            setItems(
              Menu.filter((curFood) => {
                return curFood.calories >= 999;
              })
            )
          }
        >
          Calories more than 1000
        </h3>
        <h3
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() =>
            setItems(
              Menu.filter((curFood) => {
                return curFood.calories <= 800;
              })
            )
          }
        >
          Calories less than 800
        </h3>
        <h3
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() =>
            setItems(
              Menu.filter((curFood) => {
                return curFood.foodType == "Taco";
              })
            )
          }
        >
          Taco
        </h3>
        <h3
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() =>
            setItems(
              Menu.filter((curFood) => {
                return curFood.foodType === "Burrito";
              })
            )
          }
        >
          Burrito
        </h3>
        <h3
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => setItems(Menu)}
        >
          All
        </h3>
      </div>

      <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
        {items.map((elem) => {
          const { foodName, foodType, protein, calories } = elem;
          return (
            <div className="max-w-sm p-6 bg-white border border-gray-200 hover:scale-[1.02] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {foodName}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Food Type - {foodType}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Protien - {protein}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Calories - {calories}
              </p>

              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Order Now
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
