const NameRegistryAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "address_to_user_id",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "id_to_person",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "user_id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user_address",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "user_name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "user_counter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "user_ids",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getUserById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "user_id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user_address",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "user_name",
              "type": "string"
            }
          ],
          "internalType": "struct NameRegistry.Person",
          "name": "person",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUserByaddress",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "user_id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user_address",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "user_name",
              "type": "string"
            }
          ],
          "internalType": "struct NameRegistry.Person",
          "name": "person",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getMyDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "user_id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user_address",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "user_name",
              "type": "string"
            }
          ],
          "internalType": "struct NameRegistry.Person",
          "name": "person",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

  module.exports = NameRegistryAbi;