export const addItemsToCart = (cartItems,itemToAdd)=>{
    // console.log("***Cart Items :",cartItems)
    // console.log("***itemToAdd :",itemToAdd)
    const isExist=cartItems.find(item=> item.id===itemToAdd.id)
    // console.log("**isExist :",isExist)
    if(isExist){ console.log("Inside Exist..!!")
        return cartItems.map(item=>
            item.id===itemToAdd.id?{...item,qty:item.qty+1}:item 
        )
    }
    return [...cartItems,{...itemToAdd,qty:1}]
}

export const removeItem = (cartItems,itemToRemove)=>{
    // console.log("***Cart Items :",cartItems)
    // console.log("***itemToAdd :",itemToAdd)
    const cartItem=cartItems.find(item=> item.id===itemToRemove.id)
    if(cartItem.qty>1){
        return cartItems.map(item=>(
                (item.id===itemToRemove.id)? {...item,qty:item.qty-1}: item 
        ))
    }
    return cartItems.filter(item=>item.id!==itemToRemove.id)

}
   