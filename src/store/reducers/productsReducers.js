
const initState = {
    products:[
        {
        id : 1,
        name :'male grey shirt  for all Season',
        price : 95,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2256568/2018/4/3/11522749277396-HIGHLANDER-Men-Teal-Slim-Fit-Solid-Casual-Shirt-7301522749277212-1.jpg',
        discount: 4,
        discountprice:95 - 4 / 100 * 95,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    },
    {
        id : 2,
        name :'male Brown shirt  for all Season',
        price : 120,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg',
        discount: 2,
        discountprice:120 - 2 / 100 * 120,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    },{
        id : 3,
        name :'male white shirt  for all Season',
        price : 150,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2347555/2019/12/3/77c23017-fd9d-4ad8-95f5-8722154e85ac1575361938857-HIGHLANDER-Men-White--Blue-Slim-Fit-Striped-Casual-Shirt-304-1.jpg',
        discount: 3,
        discountprice:150 - 3 / 100 * 150,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    },{
        id : 4,
        name :'male blue shoes  for all Season',
        price : 200,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12470470/2020/10/7/b397264d-a4d8-4fd7-b21f-273b4e6f7c2c1602072222699-Skechers-Men-Blue-GO-RUN-FAST-Running-Shoes-3101602072220361-1.jpg',
        discount: 3,
        discountprice:200 - 3 / 100 * 200,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    },{
        id : 5,
        name :'male white shoes  for all Season',
        price : 130,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/6/14/d3f23f8e-3d48-4cc9-a639-304fd2ab52221592084195372-1.jpg',
        discount: 4,
        discountprice:130 - 4 / 100 * 130,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    },
    {
        id : 6,
        name :'male dark blue shoes  for all Season',
        price : 120,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11999402/2020/11/20/0c394f31-e828-44f8-91d1-4ebbe8c0b5b31605875542879-HRX-by-Hrithik-Roshan-Men-Sports-Shoes-7561605875541098-1.jpg',
        discount: 4,
        discountprice:120 - 4 / 100 * 120,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    },
    {
        id : 7,
        name :'male check t-shirt  for summer Season',
        price : 95,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg',
        discount: 4,
        discountprice:95 - 4 / 100 * 95,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    },
    {
        id : 8,
        name :'male black t-shirt  for all Season',
        price : 100,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11077774/2019/12/24/29bdd2c8-3e2f-43aa-8ce5-55f3a501a4fa1577166621272-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-1.jpg',
        discount: 2,
        discountprice:120 - 4 / 100 * 120,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    },
    {
        id : 9,
        name :'male levi t-shirt  for all Season',
        price : 125,
        image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11165778/2020/8/28/52bd2372-8b7e-4dc7-90fa-e4e5a10987c61598600600900-Levis-Men-Tshirts-8781598600599335-1.jpg',
        discount: 3,
        discountprice:125 - 3 / 100 * 125,
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sagittis magna. Mauris tellus libero, aliquam non nunc viverra, vehicula blandit turpis. Nulla vitae bibendum tellus. Curabitur leo ex, laoreet vitae augue nec, consectetur convallis dui. Etiam fermentum scelerisque ligula, at lacinia risus porttitor condimentum. Vivamus commodo, nibh et commodo facilisis, nulla tortor euismod justo, eget imperdiet eros metus eget enim. Donec ligula ante, posuere ut vulputate non, molestie sed enim. Curabitur posuere vel sapien vel sagittis.',

    }


],
product:{}
}

const productsReducers = (state = initState,action) => {
    switch(action.type){
        case "PRODUCT":
            return {...state,product: state.products.find(product => product.id === parseInt(action.id))}
       default:
           return state;
    }

}
export default productsReducers;