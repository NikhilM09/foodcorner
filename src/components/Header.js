import React from "react";

const headingElement = (
  <>
    <h1 className="bg-red-300">This is react element</h1>
    <h2 className="bg-red-300">This is second react element</h2>
  </>
);

const author = "nikhil"

const Header = () => {
  return (
    <>
      <div
        className="bg-blue-300 p-3 flex justify-between items-center"
      >
        <div className='text-3xl md:hidden'>🍔</div>
        <div className="text-3xl font-semibold">Foodplaza😋</div>
        <div className="hidden md:flex gap-3">
          <div>Home🛖</div>
          <div>About🌞</div>
          <div>Contact📞</div>
          <div>Cart🛒</div>
        </div>
      </div>
      {/* {headingElement}
      <div>This is second html element</div> */}
    </>
  );
};

// function Header() {
//   return (
//     <>
//       <div
//         className="text-purple-800 text-7xl font-extrabold"
//         style={{ backgroundColor: "yellow" }}
//       >
//         This is Header Component made by {author}
//       </div>
//       {headingElement}
//       <div>This is second html element</div>
//     </>
//   );
// };

// const Header = () =>(
//     <>
//       <div
//         className="text-purple-800 text-7xl font-extrabold"
//         style={{ backgroundColor: "yellow" }}
//       >
//         This is Header Component made by {author}
//       </div>
//       {headingElement}
//       <div>This is second html element</div>
//     </>
// )


export default Header;
