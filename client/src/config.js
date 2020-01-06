// export const RESULT_CONTRACT_ADDRESS = '0x65deCa63ae479cce3fb5917B9f8Ed6175603625D'

// 0x2b80ac1300044cb975931c002088f71b16dcea51
export const RESULT_CONTRACT_ADDRESS="0x3a873bbbe4c2c3b63b640b3e2ba1618001bee9b9"
export const RESULT_CONTRACT_ABI =  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "full_name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "mat_no",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "department",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "course_name_one",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "course_name_two",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "grade_one",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "grade_two",
          "type": "string"
        }
      ],
      "name": "ResultCreated",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "dapp_name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "result_count",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "results",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "full_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "mat_no",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "department",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "course_name_one",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "course_name_two",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "grade_one",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "grade_two",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_full_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_mat_no",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_department",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_course_name_one",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_course_name_two",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_grade_one",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_grade_two",
          "type": "string"
        }
      ],
      "name": "createResult",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getResult",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]