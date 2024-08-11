import Routers from "./reouts/Routers";
import { EditProvider } from "./components/New/EditContext";
const App = () => {
  return (
    <div>
      <EditProvider>
        <Routers />
      </EditProvider>



    </div>
  )
}

export default App
