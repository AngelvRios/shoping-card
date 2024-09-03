import { useState } from "react";

function Filtro(){
    const[minPrice, setminPrice]= useState(0);
    const hangledPriceChange= (event) =>{
        setminPrice(event.target.value);
    }
    const handleCategoryChange = (event) => {
        changeFilters((prevFilters) => ({
          ...prevFilters,
          category: event.target.value,
        }));
      }
    return(
        <section className="filtro">
            <div>
                <label htmlFor="precio">Price: </label>
                <input
                id="precio"
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onchange={hangledPriceChange}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="categoria">Categoria: </label>
                <select id="categoria" onChange={handleCategoryChange}>
                <option value="all">Todo</option>
                <option value="beauty">Belleza</option>
                <option value="fragrances">Fragrancia</option>
                <option value="furniture">Muebleria</option>
                <option value="groceries">Abarrotes</option>
                </select>
            </div>
        </section>
    )
}
export default Filtro;