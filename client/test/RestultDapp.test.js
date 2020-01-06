const ResultDapp = artifacts.require('./ResultDapp.sol')
// console.log(ResultDapp)


contract('ResultDapp',(accounts) => {
    before(async() =>{
        this.resultList = await ResultDapp.deployed()
        // console.log(this.resultList)
    })
    // check if it deploys
    it("deploys successfully", async() => {
        const address= await this.resultList.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })
    // check dapp name
    it("check dapp name", async() => {
        const dapp_name= await this.resultList.dapp_name()
        assert.equal(dapp_name, "Result Processing Dapp")
    })

    // create result
    it("create result", async() => {
        const new_result = await this.resultList.createResult(
            "John Doe",
            "UJ/2023/ns/3456",
            "Engineering",
            "CS202",
            "CS203",
            "3",
            "4"
        )
        const result_count = await this.resultList.result_count()
        assert.equal(result_count,1)
        const event = new_result.logs[0].args
        // console.log(event)
    })

    // list results 
    it("list result", async() => {
        const result_count = await this.resultList.result_count()
        const results_output= await this.resultList.results(result_count)
        // console.log("Result:",results_output)
        // console.log(results_output.full_name,'John Doe')

        // tests
        assert.equal(results_output.full_name,'John Doe')
        assert.equal(results_output.mat_no,"UJ/2023/ns/3456")
        assert.equal(results_output.department,"Engineering")
        assert.equal(results_output.course_name_one,"CS202")
        assert.equal(results_output.course_name_two,"CS203")
        assert.equal(results_output.grade_one,"3")
        assert.equal(results_output.grade_two,"4")
    })

    // get a single result
    it("get a single result", async() => {
        const result_count = await this.resultList.result_count()
        const results_output= await this.resultList.getResult(result_count)
        // console.log("Result:",results_output)
        //test
        assert.equal(results_output['1'],'John Doe')
        assert.equal(results_output['2'],'UJ/2023/ns/3456')
        assert.equal(results_output['3'],'Engineering')
        assert.equal(results_output['4'],'CS202')
        assert.equal(results_output['5'],'CS203')
        assert.equal(results_output['6'],'3')
        assert.equal(results_output['7'],'4')
    })
    
})