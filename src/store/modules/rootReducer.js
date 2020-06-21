import { combineReducers } from "redux";

import login from "./login/reducer";
import auth from "./auth/reducer";
import user from "./user/reducer";
import medicine from "./medicine/reducer";
import food from "./food/reducer";
import physicalActivity from "./physicalActivity/reducer";
import medicineRoutine from "./medicineRoutine/reducer";
import foodRoutine from "./foodRoutine/reducer";
import physicalActivityRoutine from "./physicalActivityRoutine/reducer";

export default combineReducers({
   login,
   auth,
   user,
   medicine,
   food,
   physicalActivity,
   medicineRoutine,
   foodRoutine,
   physicalActivityRoutine,
});
