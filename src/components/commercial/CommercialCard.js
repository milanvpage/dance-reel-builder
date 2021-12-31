import React from 'react'
import { deleteCommercial, editCommercial } from '../../redux/CommercialAction'
import { connect } from 'react-redux' // need access to connect in order to dispatch

function CommercialCard(props) {
    function handleDelete(){
        props.deleteCommercial(props.id) // this is actual  "dispatchDeleteComercial" the prop we created that's equal to a function that takes dispatch and dispatch(deleteCommercial(commercial))
    }

    // function handleEdit(){
    //     // set this up with dispatch so we can pull in my editCommercial from my COmmercialAction
    //     // when I click on this button what I want to do is send that dispatch of my commercial with their id BUT I want to send a new name through with an ! on the end so we can see that it's working
    //     props.editCommercial({name: props.name + "!", id: props.id}) // instead of passing through my whole person object, becasue I really only need the id and the name and I know I need to add something to the name - LET"S just send ir throguh for now as an object with the name of props.name + !, id
    // }
    return (
        <div>
            <li>{props.name} - {props.url}</li>
            {/* <button onClick={handleEdit}>!</button> */}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
// function mapDispatchToProps(dispatch){
//     return {
//         dispatchDeleteComercial: (id) => dispatch(deleteCommercial(id))
//     }
// }
export default connect(null, { deleteCommercial })(CommercialCard)

// WITH EDIT
// export default connect(null, { deleteCommercial, editCommercial })(CommercialCard)
 
// there's a nicer way to write our mapDispatchToProps WHERE we can just pass in an object rather than a function and it will do the same behavior as "function mapDispatchToProps(dispatch){}"
 // IT basically takes our default behavior and just mocks it up so we have to do less of that code
 // WHEN we add deleteCommercial to this {} object here it will do that default behavior and set up a prop of delteCommercial (dispatchDeleteCommercial) - WHICH will be equal to a function that will dispatch the return value of deleteCommercial
 // AND it will also know like whatever we pass as an arg to this object it'll take in - like how we're passing a specific commercial to the deleteCommercial(commercial) function - we can still pass in that ID - it'll just do it for us