import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
// import $ from 'jquery'


export default class DetailModal extends Component {

  // componentWillMount(){
  //   this.calculateGP()
  // }
    constructor(props){
        super(props)
        this.calculateGP = this.calculateGP.bind(this)
    }
    calculateGP(){
      // var grade_one = document.getElementById('grade_one')
      // var grade_two =document.getElementById('grade_two')
      // var credit_unit_one = document.getElementById('credit_unit_one')
      // var credit_unit_two = document.getElementById('credit_unit_two')
      // console.log(grade_one)
      // console.log(grade_two)
      // console.log(credit_unit_one)
      // console.log(credit_unit_two)
      var total_credit_unit_load = 10 // sum of the nit load
      var grade_one = parseInt(this.props.get_detail_result['6'],10)
      var grade_two = parseInt(this.props.get_detail_result['7'], 10)
      
      var first_unit_load = grade_one * 5
      var second_unit_load = grade_two * 5

      var gp = (first_unit_load + second_unit_load)/10
      console.log(this.props.get_detail_result['6'])
      console.log(this.props.get_detail_result['7'])
      return gp
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Name:   {this.props.get_detail_result['1']}
        </Modal.Title>
        <br />
        <Modal.Title id="contained-modal-title-vcenter">
        Department:   {this.props.get_detail_result['2']}
        </Modal.Title>
        <br />
        <Modal.Title id="contained-modal-title-vcenter">
        Mat No:   {this.props.get_detail_result['3']}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Result Details</h4>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Courses</th>
      <th scope="col">Grades</th>
      <th scope="col">Credit Unit</th>
      <th scope="col">Credit Unit Load</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>{this.props.get_detail_result['4']}</th>
      <td>{this.props.get_detail_result['6']}</td>
      <td id="credit_unit_one">5</td>
      
    </tr>
    <tr>
      <th id="grade_one">{this.props.get_detail_result['5']}</th>
      <td id = "grade_two" >{this.props.get_detail_result['7']}</td>
      <td id="credit_unit_two">5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      
      <th>9</th>
    </tr>

    <tr>
      <th>GP</th>
      <td></td>
      <td></td>
      
        <th id="gp">{this.calculateGP()}</th>
    </tr>
    
  </tfoot>
</table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        );
    }
}
// import React, { Component } from 'react';
// import $ from 'jquery';
// // import ReactDOM from 'react-dom';
// // import 'bootstrap';

// export default class Modal extends Component {
//     constructor(props) {
//         super(props);
//     }
//     // componentDidMount(){
        
//     //     $(ReactDOM.findDOMNode(this)).modal('show');
//     //     $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
//     // }
//     componentDidMount() {
//         const  handleModalCloseClick  = this.props.handleHideModal;
//         window.$(this.modal).modal('show');
//         window.$("#exampleModal").show()
//         console.log(window.$(this.modal).modal('show'))
//         window.$(this.modal).on('hidden.bs.modal', handleModalCloseClick);
//         }
//     render() {
//         return (
//             <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div className="modal-body">
//                     ...
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                     <button type="button" className="btn btn-primary">Save changes</button>
//                 </div>
//                 </div>
//             </div>
// </div>
//         );
//     }
// }