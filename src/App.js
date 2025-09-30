import "./App.css";

import LoanForm from "./LoanForm";
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <UserContext.Provider
      value={{
        userName: "aliii",
        name: "aliii addd",
        email: "saas@gmmma.com",
      }}
    >
      <div className="App" style={{ marginTop: "5%" }}>
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
