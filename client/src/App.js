import React, { Component } from 'react';
import Navbar from "./Navbar";
import Web3 from 'web3';
import {RESULT_CONTRACT_ABI,RESULT_CONTRACT_ADDRESS } from "./config";


export default class App  extends Component {
  async componentWillMount(){
    await this.loadWeb3() 
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  
  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    // let web3 = new Web3(
    // //   new Web3.providers.HttpProvider(
    //     // "https://ropsten.infura.io/---your api key-----"
    //     "kovan.infura.io/v3/741019b1a0e743fba0655aadd45d2733"
    //   )
    // )
    
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    const resultList = new web3.eth.Contract(RESULT_CONTRACT_ABI,RESULT_CONTRACT_ADDRESS)
    
    console.log("Network:",network)
    console.log("Accounts",accounts[0])
    // console.log("Accounts", web3.eth.defaultAccount)

    // methods call
    const dapp_name = await resultList.methods.dapp_name().call() // call the public properties
    const resultCount = await resultList.methods.result_count().call() // call result Counts  
    const admin = await resultList.methods.admin().call() // call result Counts  
    
    // set state
    // this.setState({'account':web3.eth.defaultAccount}) // update the account state
    this.setState({'account':accounts[0]})
    this.setState({'results':resultList}) // update the result state 
    this.setState({dapp_name})
    this.setState({resultCount})
    this.setState({admin})
    for(var i=1;i <= resultCount;i++){
      // const task = await todoList.methods.tasks(i).call()
      const result_list = await resultList.methods.results(i).call() // call result Counts
    
      this.setState({
        get_result_list:[...this.state.get_result_list,result_list]
      })
    }
    // this.setState({get_result_list})
    
    // console.log CONTRACT ADDRESS and 
    // console.log(RESULT_CONTRACT_ADDRESS)
    // console.log('------------------')
    // console.log(RESULT_CONTRACT_ABI)
    console.log("Dapp Name:", dapp_name)
    console.log("Results Length:", resultCount)
  }

  constructor(props){
    super(props);
    this.state = {
      account:'',
      resultCount:0, // result count 0
      results:[], // results list
      loading:true,
      dapp_name:'',
      get_result_list:[],
      get_single_result:'',
      admin:null
    }
  }
  render() { 
    return (
      <div>
      <Navbar  
        title={this.state.dapp_name}
        resultCount={this.state.resultCount}
        results= {this.state.results}
        get_result_list={this.state.get_result_list}
        admin={this.state.admin}
        account={this.state.account}
        />
      {/* 
      <Footer /> */}
      </div>
    );
  }
}

