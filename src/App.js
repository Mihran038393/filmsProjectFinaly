import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Menu } from "./component/Header/menu";
import { Routing } from "./Routing/Route";
import { DataProvider } from "./component/Content_cards/main";
import { Footer } from "./component/Footer/footer";
import { createContext, useContext, useEffect, useState } from "react";



export default function App() {
  const [className, setClassName] = useState("dark")
  const [search, setSearch] = useState("")
  const SearchProvider = createContext(search)
  
  useEffect(() => {
    
    if(className === "dark"){
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  }, [className])

console.log(search)
const handleSearch = (e) => {
    setSearch(e.target.value)
  }
const onChangeTheme = (theme) => {
    setClassName(theme)

}




  return (
    <DataProvider>
      <BrowserRouter>  
        <Menu onChangeTheme={onChangeTheme} handleSearch={handleSearch}/>
        <Routing className={className} search={search} />
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}




