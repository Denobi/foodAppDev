
import Routes from "./src/routes.js";
import RoutesAuth from "./src/routesAuth.js";


export default function App() {

  const isUserAuth = true;
  return (
    isUserAuth ? <RoutesAuth/> : <Routes/>

  );
   
   
  
  
}


