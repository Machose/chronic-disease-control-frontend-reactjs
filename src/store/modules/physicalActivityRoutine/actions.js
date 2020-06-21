export function findAllRequest() {
   return {
      type: "@physicalActivityRoutine/FIND_ALL_REQUEST",
   };
}

export function findAllSuccess(physicalActivityRoutines) {
   return {
      type: "@physicalActivityRoutine/FIND_ALL_SUCCESS",
      payload: { physicalActivityRoutines },
   };
}

export function deleteRequest(id) {
   return {
      type: "@physicalActivityRoutine/DELETE_REQUEST",
      payload: { id },
   };
}

export function deleteSuccess(id) {
   return {
      type: "@physicalActivityRoutine/DELETE_SUCCESS",
      payload: { id },
   };
}

export function saveRequest(physicalActivityRoutine) {
   return {
      type: "@physicalActivityRoutine/SAVE_REQUEST",
      payload: { physicalActivityRoutine },
   };
}

export function saveSuccess() {
   return {
      type: "@physicalActivityRoutine/SAVE_SUCCESS",
   };
}
