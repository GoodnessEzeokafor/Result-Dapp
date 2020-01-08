pragma solidity ^0.5.0;

contract ResultDapp{
    
    uint public result_count = 0; // default value for result count
    mapping(uint => Result) public results;
    string public dapp_name = "Result Processing Dapp"; // dapp name
    address public admin;
    struct Result {
        uint id;
        string full_name; 
        string mat_no;
        string department;
        string course_name_one;
        string course_name_two;
        string grade_one;
        string grade_two;
   }

   event ResultCreated(
        uint id,
        string full_name,
        string mat_no,
        string department,
        string course_name_one,
        string course_name_two,
        string grade_one,
        string grade_two
   );


    // Ensures only Admin can call a function
    modifier only_election_authority() {
        if (msg.sender != admin) revert();
        _;
    }
 constructor() public {
        // electionAuthority = 0x6415d68373647F99270E24eB145be4d6E0141Ab2;
        admin = msg.sender;
    }


  // create result
 function createResult(
            string memory _full_name,
            string memory _mat_no,
            string memory _department,
            string memory _course_name_one,
            string memory _course_name_two,
            string memory _grade_one,
            string memory _grade_two
            ) public only_election_authority{
    result_count++;
    results[result_count] = Result(
                                result_count,
                                _full_name,
                                _mat_no,
                                _department,
                                _course_name_one,
                                _course_name_two,
                                _grade_one,
                                _grade_two
                            );
    emit ResultCreated(
          result_count,
          _full_name,
          _mat_no,
          _department,
          _course_name_one,
          _course_name_two,
          _grade_one,
          _grade_two
    );

  }
   function deleteResult(uint _id) public only_election_authority{
       delete results[_id]; 
   }

  function getResult(uint _id)public view returns(
                                  uint id,
                                  string memory,
                                  string memory,
                                  string memory,
                                  string memory,
                                  string memory,
                                  string memory,
                                  string memory
                                  ){
     Result memory r = results [_id];
    //  return (r) ;
        return (
            r.id,
            r.full_name,
            r.mat_no,
            r.department,
            r.course_name_one,
            r.course_name_two,
            r.grade_one,
            r.grade_two
        );
  }
}