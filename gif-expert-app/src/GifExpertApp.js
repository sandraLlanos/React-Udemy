import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {
    // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball'];
    // const handleadd = () => {
        //     setCategories([ ...categories, 'HunterXHunter']);         
        //     // setCategories(cats => [ ...cats, 'HunterXHunter']);         
    // }
    const [categories, setCategories] = useState( [ 'One Punch'] );
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/> 
            {/* <button onClick={ handleadd }>Add</button> */}
            
            <ol>
                {
                    categories.map( category => (
                        //  <li key={ category }> { category } </li>
                        <GifGrid  key={category}  category={category} />
                    ))
                }   
            </ol> 

            {/* {
                categories
            }   */}
        </>
    )
}

export default GifExpertApp
