import { useState } from "react";
import viteLogo from "/vite.svg";
let kirish = ["("];
function chekc() {
  kirish.length == 3 ? kirish.push(")") : null;
  kirish.length == 7 || kirish.length == 10 ? kirish.push("-") : null;
  kirish.length > 12 ? kirish.pop() : null;
}
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [click, setClick] = useState([]);
  const handleClick = (index) => {
    console.log(index);
    kirish.push(index);
    setClick([...kirish]);
    chekc();
    console.log(click);
  };
  const handleDel = () => {
    kirish.pop();

    return setClick(kirish);
  };

  return (
    <div className="phone">
      <div className="display">
        <div className="logo">
          <img
            className="logoImg"
            src={
              ((click[1] == 9 || click[1] == 7) &&
              (click[2] == 9 || click[2] == 5 || click[2] == 7)
                ? "uzbmobile.jpg"
                : "imgUzb.jpg") ||
              (click[1] == 9 && click[2] == 0 ? "belayn.jpg" : "imgUzb.jpg")
            }
            alt=""
          />
        </div>
        {click.map((e) => (
          <span>{e} </span>
        ))}
      </div>

      <div className="numbers">
        {numbers.map((number, i) => (
          <div
            onClick={() => {
              handleClick(i);
            }}
            className="number"
          >
            {number}
          </div>
        ))}
        <div className="number">+</div>
        <div onClick={handleDel} className="number">
          <img src="del2.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import viteLogo from "/vite.svg";

// const fruits = ["Apple", "Banan", "Orange"];

// function App() {
//   const [active, setActive] = useState(null);
//   const [tanlandi, setTanlandi] = useState(false);
//   function click(num) {

//     setActive(active === num ? null : num);
//   }
//   return (
//     <>
//       <ul>
//         {fruits.map((fruit, i) => (
//           <li
//             onClick={() => {
//               click(i);
//             }}
//             className={active == i  ? "active" : null}
//           >
//             {fruit}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;
