import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Main from '../containers/Main';
import Proyect from "../containers/Proyect";
import '../styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/proyecto/:proyect" component={Proyect}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
