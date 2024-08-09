import './App.css'
// import User from "./suspense/before/User.jsx";
import User from "./suspense/after/User";
import {Suspense} from "react";
import fetchData from "./suspense/after/fetchData.js";
import {AppContextProvider} from "./context.jsx";
import App2 from "./App2.jsx";

function App() {

  return (
    /*<User userId="1"/>*/
      /*<Suspense fallback={<p>사용자 정보 로딩중...</p>}>
          <User resource={fetchData("1")} />
      </Suspense>*/

      <AppContextProvider>
            <App2 />
      </AppContextProvider>
  )
}

export default App
