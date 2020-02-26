import React, {useState, useEffect} from 'react';


function ActorsPage (props) {

    const [loading, setLoading] = useState(true)
    const [peoples, setPeoples] = useState([])

    let inputRef = null

    useEffect(() => {
        (async () => {
            const res = await fetch("https://swapi.co/api/people/")
            const peoples = await res.json()

            setPeoples(peoples.results)
            setLoading(false)
        })()
    }, [])



    const removeActor = (remove_index) => {
       setPeoples(peoples.filter((item, index) => remove_index !== index ))
    }

    const addActor = () => {
        const value = inputRef.value.trim()
        
        if (value.length > 1) {
            setPeoples([...peoples, {name: value}])
            inputRef.value = null
        }
       
     }

    return (<div className="container">
        {loading ? (<div>LOADING</div> 
            ) : ( 
                <div>
                    <div>
                        { peoples.map((person, index) => {
                            return <div>
                                {person.name} <button onClick={() => {removeActor(index)}}>delete</button>
                            </div>})
                        }
                    </div>
                    <div>
                        <input ref={(ref)=>{inputRef = ref}} type="text"/>
                        <button onClick={() => {addActor()}}> add </button>
                    </div>
                </div>
            )
        }
    </div>)
}



export default ActorsPage