import React,{useState,useEffect} from 'react'



const people = [
    "Talim",
    "Ansari",
    "Alim",
    "Ansari",
    "Feriha",
    "Parianka",
    "Veddi",
    "Emir",
    "Akash"
]
const LiveSearch = () => {
       const [searchItem,setSearchItem] = useState("");
       const [searchResult,setSearchResult] = useState([]);

         useEffect(()=> {
          const  results = people.filter(person => person.toLocaleLowerCase().includes(searchItem));
          setSearchResult(results)    
         },[searchItem])
       const handleChange = event => 
       {
        setSearchItem(event.target.value);
       }

    return (
        <div className="container text-center pt-5">
            <h2>Live Search</h2>
            <div className="pb-4">
                <input type="text" placeholder="Search..." className="form-control" value={searchItem} onChange={handleChange}/>
            </div>
            <ul>
               {
                 searchResult.map((item,index)=>{
                     return(
                         <li key={index}>{item}</li>
                     )
                 })  
               }
            </ul>
        </div>
    )
}

export default LiveSearch
