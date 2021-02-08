import React, { useReducer, useRef } from 'react'




function TodoApp() {
    const [items,dispatch] = useReducer((state ,action)=>{
        switch(action.type){
            case 'ADD':
            return[...state,{
                name: action.name
            }];
            case 'REMOVE' :
                return state.filter((item,index) => index !== action.index)
            default:
                return state;
        }
 },[]);
  const inputRef = useRef(null);
 const handleSubmit = (e) => {
     e.preventDefault();
     dispatch({
         type:'ADD',
         name : inputRef.current.value
     });
     inputRef.current.value = '';
 }
    return (
        <section className="todoapp_section pt-5">
            <div className="container">
                <form class="form-inline" onSubmit={handleSubmit}>
                    <div class="form-group mx-sm-3 mb-2">
                       <input type="text" ref={inputRef} class="form-control"  placeholder="Add User" />
                    </div>
                    <button type="button" class="btn btn-primary mb-2">Add</button>
                </form>
                <ul>
                    {
                        items.map((item,index)=>{
                            return(
                                <li key={index}>{item.name}
                                <button onClick={()=>dispatch({type:'REMOVE',index})}>&times;</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default TodoApp;
