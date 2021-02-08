const initState = [
    {
        label: 'Username',
        name: 'username',
        type:  'text'
    },{
        label :'Email',
        name:'email',
        type:'email'
    },{
        label:'Password',
        name:'password',
        type:'password'
    }
]
const FormData = (state = initState, action) =>{
    switch(action.type){
        default:
            return state
    }
}
export default FormData
