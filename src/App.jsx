import AppBar from "./components/AppBar"
import Filter from "./components/Filter"
import Footer from "./components/Footer"
import Items from "./components/Items"
import SeasonSpecials from "./components/SeasonSpecials"
// import SignUp from "./components/auth/SignUp"

// import LoginPage from "./components/auth/Login"


const App = () => {
  return <>
<AppBar/>
<Filter/>
<Items/>
{/* <SignUp/> */}
{/* <LoginPage/> */}
<SeasonSpecials/>
<Footer/>
</>
  
}

export default App
{/* <span className="text-5xl text-green-500 font-bold">Fruit</span>
<span className="text-4xl font-light">Shop</span>

<div>
  <span className="text-stone-500 text-4xl font-display "> Season Specials</span>
</div>

<div>
  <span className="text-stone-500 text-4xl font-display "> Find Us On</span>
</div> */}