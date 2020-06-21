export function findAllRequest() {
   return {
      type: "@foodRoutine/FIND_ALL_REQUEST",
   };
}

export function findAllSuccess(foodRoutines) {
   return {
      type: "@foodRoutine/FIND_ALL_SUCCESS",
      payload: { foodRoutines },
   };
}

export function deleteRequest(id) {
   return {
      type: "@foodRoutine/DELETE_REQUEST",
      payload: { id },
   };
}

export function deleteSuccess(id) {
   return {
      type: "@foodRoutine/DELETE_SUCCESS",
      payload: { id },
   };
}

export function saveRequest(foodRoutine) {
   return {
      type: "@foodRoutine/SAVE_REQUEST",
      payload: { foodRoutine },
   };
}

export function saveSuccess() {
   return {
      type: "@foodRoutine/SAVE_SUCCESS",
   };
}
