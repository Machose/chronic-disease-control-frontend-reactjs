export function findAllRequest() {
   return {
      type: "@medicine/FIND_ALL_REQUEST",
   };
}

export function findAllSuccess(medicines) {
   return {
      type: "@medicine/FIND_ALL_SUCCESS",
      payload: { medicines },
   };
}

export function deleteRequest(id) {
   return {
      type: "@medicine/DELETE_REQUEST",
      payload: { id },
   };
}

export function deleteSuccess(id) {
   return {
      type: "@medicine/DELETE_SUCCESS",
      payload: { id },
   };
}

export function saveRequest(medicine) {
   return {
      type: "@medicine/SAVE_REQUEST",
      payload: { medicine },
   };
}

export function saveSuccess() {
   return {
      type: "@medicine/SAVE_SUCCESS",
   };
}
