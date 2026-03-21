// import ThemeSelector from "./ThemeSelector";
import { useState } from "react";
import UserProfile from "./UserProfile";
import SmartCounter from "./SmartCounter";

function App() {
  const users = [
    { name: "Ayoub", age: 20, profession: "Developpeur" },
    { name: "Ahmed", age: 30, profession: "Designer" },
    { name: "Amin", age: 24, profession: "Manager" },
  ];
  const usercomponent = [];

  for (let i = 0; i < users.length; i++) {
    usercomponent.push(
      <UserProfile
        name={users[i].name}
        age={users[i].age}
        profession={users[i].profession}
      />,
    );
  }
  //   challenge 4 increment decrement

  const [counter, setCounter] = useState(0);
  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      alert("Limite atteinte");
    }
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Limite atteinte");
    }
  };
  return (
    <>
      {/* <ThemeSelector />
      <hr className="border border-[5px] border-red-500 mt-4 " /> */}
      <div>
        {/* {users.map((user) => {
          return (
            <UserProfile
              key={user.name}
              name={user.name}
              age={user.age}
              profession={user.profession}
            />
          );
        })} */}
        {usercomponent}
      </div>
      <hr className="border border-[5px] border-red-500 mt-4 " />
      <SmartCounter
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
}
export default App;
