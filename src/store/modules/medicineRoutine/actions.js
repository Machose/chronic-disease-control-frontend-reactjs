export function findAllRequest() {
   return {
      type: "@medicineRoutine/FIND_ALL_REQUEST",
   };
}

export function findAllSuccess(medicineRoutines) {
   return {
      type: "@medicineRoutine/FIND_ALL_SUCCESS",
      payload: { medicineRoutines },
   };
}

export function deleteRequest(id) {
   return {
      type: "@medicineRoutine/DELETE_REQUEST",
      payload: { id },
   };
}

export function deleteSuccess(id) {
   return {
      type: "@medicineRoutine/DELETE_SUCCESS",
      payload: { id },
   };
}

export function saveRequest(medicineRoutine) {
   return {
      type: "@medicineRoutine/SAVE_REQUEST",
      payload: { medicineRoutine },
   };
}

export function saveSuccess() {
   return {
      type: "@medicineRoutine/SAVE_SUCCESS",
   };
}
