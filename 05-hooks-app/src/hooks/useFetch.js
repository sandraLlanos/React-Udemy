import { useEffect, useState, useRef } from "react"

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({data:null, loading:true, error:null});

    const isMounted = useRef(true)   

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({
            data: null,
            loading:true, 
            error:null
        });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if(isMounted.current){
                        setState({
                        data,
                            loading:false, 
                            error:null
                        })
                    }
                    else {
                        console.log('unmonunt component');
                    }
                }, 4000);
            })
    }, [url]);

    return state;
}
