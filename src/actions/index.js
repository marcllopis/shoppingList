
export function addItem(item, moveItTo){
  console.log('on actions', item, moveItTo);
  
  return {
    type: 'ADD_ITEM',
    item,
    moveItTo
  }
}

export function deleteItem(item, moveItTo){
  return {
    type: 'DELETE_ITEM',
    item,
    moveItTo
  }
}

