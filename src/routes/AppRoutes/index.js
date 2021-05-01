import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { Sidebar } from "../../components/molecules";
import { GET_ALL_SURAH } from "../../config";
import { AllSurah, Surah } from "../../pages";
import BookmarkedSurah from "../../pages/BookmarkedSurah";




const Routes = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const getAllSurah = async () => {
            await axios.get(GET_ALL_SURAH)
            .then(res => {
                setData(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
        }
        getAllSurah()
        
    }, [])

    const Home = ({data, loading}) => {
        return (
            <div className="flex">
                <Sidebar/>
                <Route path="/h/bookmarked">
                    <BookmarkedSurah data={data} loading={loading}/>
                </Route>
                <Route path="/h/surah">
                    <AllSurah data={data} loading={loading}/>
                </Route>
            </div>
        )
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/"><Redirect to="/h/surah"/></Route>
                <Route path="/h">
                    {/* <AllSurah data={data} loading={loading}/> */}
                    <Home data={data} loading={loading}/>
                </Route>
                {/* <Route exact path="/bookmarked">
                    <BookmarkedSurah data={data} loading={loading}/>
                </Route> */}
                <Route path="/surah/:id">
                    <Surah/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
