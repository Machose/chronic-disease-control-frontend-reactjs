export function findAllRequest() {
   return {
      type: "@food/FIND_ALL_REQUEST",
   };
}

export function findAllSuccess(foods) {
   return {
      type: "@food/FIND_ALL_SUCCESS",
      payload: { foods },
   };
}

export function deleteRequest(id) {
   return {
      type: "@food/DELETE_REQUEST",
      payload: { id },
   };
}

export function deleteSuccess(id) {
   return {
      type: "@food/DELETE_SUCCESS",
      payload: { id },
   };
}

export function saveRequest(food) {
   return {
      type: "@food/SAVE_REQUEST",
      payload: { food },
   };
}

export function saveSuccess() {
   return {
      type: "@food/SAVE_SUCCESS",
   };
}
