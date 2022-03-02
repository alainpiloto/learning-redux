import { useState } from "react";

const Home = () => {

const [search, setSearch] = useState("")

const handleSearch = e => {
    setSearch(e.target.value)
}

    return (
        <div className="flex">
            <div className="w-3/5">
                
            </div>
            <div className="w-2/5 h-screen flex items-center">
                <div className="space-y-2">
                    <h3>Ingresa el nombre de tu pelicula</h3>
                    <input 
                        className="border-2 p-1 border-blue-200" 
                        type="search"
                        onChange={ e => handleSearch(e)}
                    />
                    <div className="space-x-2">
                        <button className=" border-2 p-1 rounded-xl">Buscar</button>
                        <button className="border-2 p-1 rounded-xl">Limpiar búsqueda</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Home;