import { connect, Connect } from "react-redux";
import App from "../App";
import { bindActionCreators } from "redux";
// import { getData } from "../actions/postActions";
import { getData } from "../actions/postActions";

const mapStatetoProps=(state)=>{
    console.log("container",state);
    return{
        fetched_data:state.values.data,
        error_values:state.values.error,
    };
};

const mapDispatchtoprops=(dispatch)=>{
    return bindActionCreators(
        {
            getData,
        },
        dispatch
    );
};
export default connect(mapStatetoProps,mapDispatchtoprops)(App);