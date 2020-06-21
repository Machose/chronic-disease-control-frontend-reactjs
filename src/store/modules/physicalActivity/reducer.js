import produce from "immer";

const INITIAL_STATE = { physicalActivities: [], loading: false };

export default function physicalActivity(state = INITIAL_STATE, action) {
   return produce(state, (draft) => {
      switch (action.type) {
         case "@physicalActivity/FIND_ALL_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@physicalActivity/FIND_ALL_SUCCESS": {
            draft.physicalActivities = action.payload.physicalActivities;
            draft.loading = false;
            break;
         }

         case "@physicalActivity/DELETE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@physicalActivity/DELETE_SUCCESS": {
            const { id } = action.payload;

            const index = draft.physicalActivities.findIndex(
               (physicalActivity) => physicalActivity._id === id
            );

            if (index >= 0) {
               draft.physicalActivities.splice(index, 1);
            }

            draft.loading = false;
            break;
         }

         case "@physicalActivity/SAVE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@physicalActivity/SAVE_SUCCESS": {
            draft.loading = false;
            break;
         }

         default:
      }
   });
}
