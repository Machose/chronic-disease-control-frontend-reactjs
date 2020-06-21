import produce from "immer";

const INITIAL_STATE = { foods: [], loading: false };

export default function food(state = INITIAL_STATE, action) {
   return produce(state, (draft) => {
      switch (action.type) {
         case "@food/FIND_ALL_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@food/FIND_ALL_SUCCESS": {
            draft.foods = action.payload.foods;
            draft.loading = false;
            break;
         }

         case "@food/DELETE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@food/DELETE_SUCCESS": {
            const { id } = action.payload;

            const index = draft.foods.findIndex((food) => food._id === id);

            if (index >= 0) {
               draft.foods.splice(index, 1);
            }

            draft.loading = false;
            break;
         }

         case "@food/SAVE_REQUEST": {
            draft.loading = true;
            break;
         }

         case "@food/SAVE_SUCCESS": {
            draft.loading = false;
            break;
         }

         default:
      }
   });
}
