// import ThemeSelector from "./ThemeSelector";
import UserProfile from "./UserProfile";

function App() {
  const users = [
    { name: "Ayoub", age: 20, profession: "Developpeur" },
    { name: "Ahmed", age: 30, profession: "Designer" },
    { name: "Amin", age: 24, profession: "Manager" },
  ];
  const usercomponent = [];

  for (let i = 0; i < users.length; i++) {
    usercomponent.push(<UserProfile name={users[i].name} age={users[i].age} profession={users[i].profession}/>);
  }

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
    </>
  );
}
export default App;
