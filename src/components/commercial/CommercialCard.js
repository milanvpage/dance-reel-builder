import React from 'react'
import { deleteCommercial } from '../../redux/CommercialAction'
import { connect } from 'react-redux' // need access to connect in order to dispatch

function CommercialCard({ id, name, deleteCommercial }) {

    function handleDelete(){
        deleteCommercial(id) // this is actual  "dispatchDeleteComercial" the prop we created that's equal to a function that takes dispatch and dispatch(deleteCommercial(commercial))
    }
    return (
        <div>
            <li>{name}</li><button onClick={handleDelete}>X</button>
        </div>
    )
}
// function mapDispatchToProps(dispatch){
//     return {
//         dispatchDeleteComercial: (commercial) => dispatch(deleteCommercial(commercial))
//     }
// }
export default connect(null, { deleteCommercial })(CommercialCard)
 // there's a nicer way to write our mapDispatchToProps WHERE we can just pass in an object rather than a function and it will do the same behavior as "function mapDispatchToProps(dispatch){}"
 // IT basically takes our default behavior and just mocks it up so we have to do less of that code
 // WHEN we add deleteCommercial to this {} object here it will do that default behavior and set up a prop of delteCommercial (dispatchDeleteCommercial) - WHICH will be equal to a function that will dispatch the return value of deleteCommercial
 // AND it will also know like whatever we pass as an arg to this object it'll take in - like how we're passing a specific commercial to the deleteCommercial(commercial) function - we can still pass in that ID - it'll just do it for us