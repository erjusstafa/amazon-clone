export const initialState = {
    basket: [{
        id : "123455",
        title : "The Lean Startup  How Constant Innovation Creates",
        price : 11.96,
        rating : 4,
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
        },
        {
            id : "123455",
            title : "The Lean Startup  How Constant Innovation Creates",
            price : 11.96,
            rating : 4,
            image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
            }
],
    user : null,
}


export const getBasketTotal = (basket) => 
basket?.reduce((amount , item) => item.price + amount , 0)

const  reducer = (state, action) => {

    console.log(action);

    switch (action.type) {
        case 'Add_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state , 
                basket : [...state.basket, action.iitem]
            };
        case 'REMOVE_FROM_BASKET':
            //logic for removing  item to basket
            let newBasket = [...state.basket];

            //we check to see if product exists
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            
            if (index >= 0) {
                //item exists in basket, remove it....
                newBasket.splice(index, 1);
                
            } else {
                console.warn(`Cant remove product (id : ${action.id}) as its `)
            }
            return {
                ...state ,  
                basketz : newBasket
            };
            
        default:
            return state;
    }
}

export default reducer; 