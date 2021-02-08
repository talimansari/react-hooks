import React from 'react'
import {useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
    username: yup.string().required(),
    email:yup.string().required(),
    password: yup.string(5).required("hello world"),
  });
function Form() {
    const state = useSelector(state => state.FormData);
    
  
      const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
     
    const onSubmit = (data) =>{
         console.log(data);
    }
    return (
        <section className="from_section pt-5">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        state.map((item,index)=>{
                            return(
                                <div className="form-group" key={index}>
                                <label>{item.label}</label>
                                <input
                                 className="form-control"
                                 ref={register}
                                 type={item.type}
                                 name={item.name}/>
                                 <p>{errors[item.name]?.message}</p>
                                 </div>
                            )
                        })
                    }
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Form
