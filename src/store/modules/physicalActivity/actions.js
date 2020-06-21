export function findAllRequest() {
   return {
      type: "@physicalActivity/FIND_ALL_REQUEST",
   };
}

export function findAllSuccess(physicalActivities) {
   return {
      type: "@physicalActivity/FIND_ALL_SUCCESS",
      payload: { physicalActivities },
   };
}

export function deleteRequest(id) {
   return {
      type: "@physicalActivity/DELETE_REQUEST",
      payload: { id },
   };
}

export function deleteSuccess(id) {
   return {
      type: "@physicalActivity/DELETE_SUCCESS",
      payload: { id },
   };
}

export function saveRequest(physicalActivity) {
   return {
      type: "@physicalActivity/SAVE_REQUEST",
      payload: { physicalActivity },
   };
}

export function saveSuccess() {
   return {
      type: "@physicalActivity/SAVE_SUCCESS",
   };
}
