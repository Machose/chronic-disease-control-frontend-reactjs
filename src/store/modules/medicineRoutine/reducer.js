import produce from "immer";

const INITIAL_STATE = { medicineRoutines: [], loading: false };

export default function medicineRoutine(state = INITIAL_STATE, action) {
   return produce(state, (draft) => {
      switch (action.type) {
         case "@medicineRoutine/FIND_ALL_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@medicineRoutine/FIND_ALL_SUCCESS": {
            draft.medicineRoutines = action.payload.medicineRoutines;
            draft.loading = false;
            break;
         }

         case "@medicineRoutine/DELETE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@medicineRoutine/DELETE_SUCCESS": {
            const { id } = action.payload;

            const index = draft.medicineRoutines.findIndex(
               (medicineRoutine) => medicineRoutine._id === id
            );

            if (index >= 0) {
               draft.medicineRoutines.splice(index, 1);
            }

            draft.loading = false;
            break;
         }

         case "@medicineRoutine/SAVE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@medicineRoutine/SAVE_SUCCESS": {
            draft.loading = false;
            break;
         }

         default:
      }
   });
}
