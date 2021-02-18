import React, { useState } from 'react'

function GifExpertApp() {
    // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState( [ 'One Punch', 'Samurai X', 'Dragon Ball'] );
    const handleadd = () => {
        setCategories([ ...categories, 'HunterXHunter']);         
        // setCategories(cats => [ ...cats, 'HunterXHunter']);         
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/> 
            <button onClick={ handleadd }>Add</button>
            
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> { category } </li>;
                    })
                }   
            </ol> 

            {/* {
                categories
            }   */}
        </>
    )
}

export default GifExpertApp
