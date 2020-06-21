import produce from "immer";

const INITIAL_STATE = { foodRoutines: [], loading: false };

export default function foodRoutine(state = INITIAL_STATE, action) {
   return produce(state, (draft) => {
      switch (action.type) {
         case "@foodRoutine/FIND_ALL_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@foodRoutine/FIND_ALL_SUCCESS": {
            draft.foodRoutines = action.payload.foodRoutines;
            draft.loading = false;
            break;
         }

         case "@foodRoutine/DELETE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@foodRoutine/DELETE_SUCCESS": {
            const { id } = action.payload;

            const index = draft.foodRoutines.findIndex(
               (foodRoutine) => foodRoutine._id === id
            );

            if (index >= 0) {
               draft.foodRoutines.splice(index, 1);
            }

            draft.loading = false;
            break;
         }

         case "@foodRoutine/SAVE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@foodRoutine/SAVE_SUCCESS": {
            draft.loading = false;
            break;
         }

         default:
      }
   });
}
