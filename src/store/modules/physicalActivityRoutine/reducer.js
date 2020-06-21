import produce from "immer";

const INITIAL_STATE = { physicalActivityRoutines: [], loading: false };

export default function physicalActivityRoutine(state = INITIAL_STATE, action) {
   return produce(state, (draft) => {
      switch (action.type) {
         case "@physicalActivityRoutine/FIND_ALL_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@physicalActivityRoutine/FIND_ALL_SUCCESS": {
            draft.physicalActivityRoutines =
               action.payload.physicalActivityRoutines;
            draft.loading = false;
            break;
         }

         case "@physicalActivityRoutine/DELETE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@physicalActivityRoutine/DELETE_SUCCESS": {
            const { id } = action.payload;

            const index = draft.physicalActivityRoutines.findIndex(
               (physicalActivityRoutine) => physicalActivityRoutine._id === id
            );

            if (index >= 0) {
               draft.physicalActivityRoutines.splice(index, 1);
            }

            draft.loading = false;
            break;
         }

         case "@physicalActivityRoutine/SAVE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@physicalActivityRoutine/SAVE_SUCCESS": {
            draft.loading = false;
            break;
         }

         default:
      }
   });
}
