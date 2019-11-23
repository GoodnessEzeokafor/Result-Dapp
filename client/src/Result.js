import React, { Component } from 'react';
import DetailModal from './Modal';

export default class Result  extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			single_result:'',
			addModalShow: false
		}
	
	}

	async getSingleResult(uint_id){
		const get_single_result = await this.props.results.methods.getResult(uint_id).call()
		// console.log(get_single_result) 
		return get_single_result
	}

	
	
  render() {
	// const [modalShow, setModalShow] = React.useState(false);
	let addModalClose =() => this.setState({addModalShow:false})
    return (
      <div>
		  <h2 className="text-center mt-3 mb-5">Result List</h2>
		<div className='table-responsive'>
      <table className="table table-striped">
	  <thead>

		<tr>
			<th scope="col">#</th>
			<th scope="col">Full Name</th>
			<th scope="col">Mat No</th>
			<th scope="col">Department</th>
			<th scope="col">Course  </th>
			<th scope="col">Course 2</th>
			<th scope="col">Grade For Course </th>
			<th scope="col">Grade For Course 2 </th>
			<th scope="col">View Result </th>
		</tr>	
			
	  </thead>
	  <tbody>
	  {this.props.get_result_list.map((result, key)=> {
				return(
					<tr key={key}>
	  <th scope="row">{result.id}</th>
				<td id="mat_no">{result.full_name}</td>
				<td id="mat_no">{result.mat_no}</td>
				<td id="department">{result.department}</td>
				<td id="course_name_one">{result.course_name_one}</td>
	  			<td id="course_name_two">{result.course_name_two}</td>
				<td id="grade_one">{result.grade_one}</td>
				<td id="grade_two">{result.grade_two}</td>
				<td>
					<button id={result.id}
						data-target="#exampleModal"
						onClick={async (event) => {
							// // const id = {result.id}
							// alert(`Hello World ${result.id}`)
							// this.getSingleResult()
							const id= parseInt(event.target.id)
							console.log(typeof id)
							const single_result = await  this.getSingleResult(id)
								 
							console.log("Single:",single_result )
							console.log(single_result['4'])
							this.setState({single_result})
							this.setState({addModalShow:true})
							// this.setState({
							// 	showModal:true
							// })
							// this.handleShowModal() // to show model
							event.persist();
						}}
						className="btn btn-primary">
						View Result
					</button>
				</td>
				  </tr>
						
				)
			})}
			  
	  </tbody>
	</table>
	</div> 
			<DetailModal 
				get_detail_result={this.state.single_result}
				show={this.state.addModalShow}
				onHide={addModalClose}
				/> 

      </div>

    );
  }
}
