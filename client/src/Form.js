import React, { Component } from 'react';
import Web3 from 'web3';
import {RESULT_CONTRACT_ABI,RESULT_CONTRACT_ADDRESS } from "./config";


export default class Form extends Component {


    componentWillMount(){
        this.loadBlockchainData()
      }
      async loadBlockchainData(){
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
        const network = await web3.eth.net.getNetworkType()
        const accounts = await web3.eth.getAccounts()
        const resultList = new web3.eth.Contract(RESULT_CONTRACT_ABI,RESULT_CONTRACT_ADDRESS)
        
        console.log("Network:",network)
        console.log("Accounts",accounts)
    
        // methods call
        const dapp_name = await resultList.methods.dapp_name().call() // call the public properties
        const resultCount = await resultList.methods.result_count().call() // call result Counts
        // set state
        this.setState({'accounts':accounts[0]}) // update the account state
        this.setState({'results':resultList}) // update the result state 
        this.setState({dapp_name})
        this.setState({resultCount})
        
        // console.log CONTRACT ADDRESS and 
        // console.log(RESULT_CONTRACT_ADDRESS)
        // console.log('------------------')
        // console.log(RESULT_CONTRACT_ABI)
        console.log("Dapp Name:", dapp_name)
        console.log("Results Length:", resultCount)
        // console.log(this.state.results.methods.createResult())
      }
    
      constructor(props){
        super(props);
        this.state = {
          accounts:'',
          resultCount:0, // result count 0
          results:[], // results list
          resultList:'',
          loading:true,
          dapp_name:'',
          person_arr: {
            first_name:'',
            last_name:'',
            mat_no:'',
            department:'',
            course_name:'',
            credit_unit:'',                
        }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFirstName = this.handleFirstName.bind(this);
        // this.handleLastName = this.handleLastName.bind(this)
        // this.handleDepartment = this.handleDepartment.bind(this)
        // this.handleMatNo = this.handleMatNo.bind(this)

      }



    

    handleSubmit(event){         
            // console.log(event.target)
        console.log(event.target.full_name.value)
        console.log(event.target.department.value)
        console.log(event.target.mat_no.value)
        console.log(event.target.course_name_one.value)
        console.log(event.target.grade_one.value)
        console.log(event.target.course_name_two.value)
        console.log(event.target.grade_two.value)

        // console.log(this.state.resultList.methods.createResult())
        this.setState({loading:true})
        this.state.results.methods.createResult(
            event.target.full_name.value,
            event.target.department.value,
            event.target.mat_no.value,
            event.target.course_name_one.value,
            event.target.course_name_two.value,
            event.target.grade_one.value,
            event.target.grade_two.value
        )
        .send({from:this.state.accounts})
        .once('receipt',(receipt) => {
            this.setState({loading:false})
            console.log(receipt)
        })
        //     this.state.resultList.methods.createResult(
        //         )

        // const new_result = await resultList.methods.createResult().send() // call the public properties
        // console.log(new_result)


        event.preventDefault();
        event.stopPropagation();

    }
       
        // createTask(content){
        //     this.setState({loading:true})
        //     this.state.todoList.methods.createTask(content).send({from:this.state.account})
        //     .once('receipt',(receipt) => {
        //       this.setState({loading:false})
        //     })
        //    }

    render() {
        return (
            <div>
            <h3 className="text-center mb-4">Add Student</h3>
            <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                        <div className="form-group col-md-12">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            value={this.state.full_name}  
                            className="form-control" 
                            id="full_name" 
                            placeholder="First Name" 
                            onChange={this.handleFirstName}
                        />
                    </div>
                 </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Department</label>
                        <input 
                            type="text" 
                            value = {this.state.department}
                            className="form-control" 
                            id="department" 
                            placeholder="Student Department" 
                            onChange ={this.handleDepartment}

                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Mat No</label>
                        <input 
                            value={this.state.mat_no}
                            type="text" 
                            className="form-control" 
                            id="mat_no" 
                            placeholder="Matriculation Number" 
                            onChange={this.handleMatNo}
                            
                         />
                 </div>
             </div>
             

            <div className="form-row">
                <div className="form-group col-md-4">
                <label>Course </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="course_name_one"
                />
                </div>
                <div className="form-group col-md-2">
                <label>Grade </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="grade_one"

                />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-4">
                <label>Course 2 </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="course_name_two"
                />
                </div>
                <div className="form-group col-md-2">
                <label>Grade 2</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="grade_two"

                />
                </div>
            </div>
            
            
            <button 
                type="submit" 
                className="btn btn-primary btn-block"
            >Submit</button>
            </form>
            </div>
        );
    }

}
