/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// import {useSelector} from 'react-redux'
import {connect} from 'react-redux'
import './listFruits.css'
function ListFruits(props){
return (
  <div className="fruits">
    <h5>Composant liste fruits</h5>
    <ul>
      {props.fruits.map((fruit, key) => {
        return <li key={key}>{fruit}</li>;
      })}
    </ul>
  </div>
);
}


function mapStateToProps(state){
return {fruits:state.fruits}
}


export default connect(mapStateToProps, null)(ListFruits);