import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { AllSurah, Surah } from "../../pages";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/surah">
                    <AllSurah/>
                </Route>
                <Route path="/surah/:id">
                    <Surah/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
