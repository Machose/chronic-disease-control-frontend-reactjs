import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Auth/Login";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import MedicinesList from "../pages/Medicines/List";
import MedicinesForm from "../pages/Medicines/Form";
import FoodsList from "../pages/Foods/List";
import FoodsForm from "../pages/Foods/Form";
import NotFound from "../pages/NotFound";
import PhysicalActivitiesList from "../pages/PhysicalActivities/List";
import PhysicalActivitiesForm from "../pages/PhysicalActivities/Form";
import RoutineList from "../pages/Routine/_List";

export default function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={Login} />

         <Route path="/dashboard" exact component={Dashboard} isPrivate />

         <Route path="/profile" exact component={Profile} isPrivate />

         <Route path="/medicines" exact component={MedicinesList} isPrivate />
         <Route
            path="/medicines/new"
            exact
            component={MedicinesForm}
            isPrivate
         />
         <Route
            path="/medicines/:id"
            exact
            component={MedicinesForm}
            isPrivate
         />

         <Route path="/foods" exact component={FoodsList} isPrivate />
         <Route path="/foods/new" exact component={FoodsForm} isPrivate />
         <Route path="/foods/:id" exact component={FoodsForm} isPrivate />

         <Route
            path="/physicalActivities"
            exact
            component={PhysicalActivitiesList}
            isPrivate
         />
         <Route
            path="/physicalActivities/new"
            exact
            component={PhysicalActivitiesForm}
            isPrivate
         />
         <Route
            path="/physicalActivities/:id"
            exact
            component={PhysicalActivitiesForm}
            isPrivate
         />

         <Route path="/routines" exact component={RoutineList} isPrivate />
         <Route path="/routines/new" exact component={RoutineList} isPrivate />
         <Route path="/routines/:id" exact component={RoutineList} isPrivate />

         <Route component={NotFound} isPrivate />
      </Switch>
   );
}
