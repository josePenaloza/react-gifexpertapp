import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    

   /**  const handleAdd = () =>{
        //setcategories( ['hunter  x', ...categories]);
        setcategories( cats =>[ ...cats, 'hunter  x' ]);

    }*/


    return (
        <>
            <h2>Los medios gifs</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

           

            <ol>{
                categories.map( category => (
                <GifGrid 
                key = {category }
                category={category } />
                ))

            }
            </ol>
            
        </>
    )
}
