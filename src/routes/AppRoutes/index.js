import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { GET_ALL_SURAH } from "../../config";
import { GlobalContext } from "../../context";
import { AllSurah, Surah } from "../../pages";

const Routes = () => {
    const {bookmarkList} = useContext(GlobalContext)
    const [bookmarked] = bookmarkList

    const [data, setData] = useState([])
    const [dataFiltered, setDataFiltered] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const getAllSurah = async () => {
            await axios.get(GET_ALL_SURAH)
            .then(res => {
                const result = res.data.data
                let filtered = []
                setData(result)
                for (let i = 0; i < bookmarked.length; i++) {
                    filtered.push(result[bookmarked[i] - 1])
                    console.log(filtered);
                }
                setDataFiltered(filtered)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
        }
        getAllSurah()
        
    }, [])
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Redirect to="/surah"/></Route>
                <Route exact path="/surah">
                    <AllSurah data={data} loading={loading}/>
                </Route>
                <Route exact path="/bookmarked">
                    <AllSurah data={dataFiltered} loading={loading}/>
                </Route>
                <Route path="/surah/:id">
                    <Surah/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
