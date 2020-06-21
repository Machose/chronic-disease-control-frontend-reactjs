import produce from "immer";

const INITIAL_STATE = {
   page: "singIn",
};

export default function login(state = INITIAL_STATE, action) {
   return produce(state, (draft) => {
      switch (action.type) {
         case "@login/ALTER_PAGE_LOGIN": {
            const { page } = state;

            draft.page = page === "singIn" ? "singUp" : "singIn";
            break;
         }

         case "@auth/SING_UP_SUCCESS": {
            draft.page = "singIn";
            break;
         }

         default:
      }
   });
}
