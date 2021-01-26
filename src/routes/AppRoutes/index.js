import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AllSurah } from "../../pages";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/surah">
                        <AllSurah/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
