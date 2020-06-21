import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";
import medicine from "./medicine/sagas";
import food from "./food/sagas";
import physicalActivity from "./physicalActivity/sagas";
import medicineRoutine from "./medicineRoutine/sagas";
import foodRoutine from "./foodRoutine/sagas";
import physicalActivityRoutine from "./physicalActivityRoutine/sagas";

export default function* rootSaga() {
   return yield all([
      auth,
      user,
      medicine,
      food,
      physicalActivity,
      medicineRoutine,
      foodRoutine,
      physicalActivityRoutine,
   ]);
}
