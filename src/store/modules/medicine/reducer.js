import produce from "immer";

const INITIAL_STATE = { medicines: [], loading: false };

export default function medicine(state = INITIAL_STATE, action) {
   return produce(state, (draft) => {
      switch (action.type) {
         case "@medicine/FIND_ALL_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@medicine/FIND_ALL_SUCCESS": {
            draft.medicines = action.payload.medicines;
            draft.loading = false;
            break;
         }

         case "@medicine/DELETE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@medicine/DELETE_SUCCESS": {
            const { id } = action.payload;

            const index = draft.medicines.findIndex(
               (medicine) => medicine._id === id
            );

            if (index >= 0) {
               draft.medicines.splice(index, 1);
            }

            draft.loading = false;
            break;
         }

         case "@medicine/SAVE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@medicine/SAVE_SUCCESS": {
            draft.loading = false;
            break;
         }

         default:
      }
   });
}
