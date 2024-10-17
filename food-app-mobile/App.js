
import Routes from "./src/routes.js";
import RoutesAuth from "./src/routesAuth.js";


export default function App() {

  const isUserAuth = false;
  return (
    isUserAuth ? <RoutesAuth/> : <Routes/>

  );
   
   
  
  
}


