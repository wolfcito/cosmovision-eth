//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ColeccionCosmovision is ERC721, AccessControl {
    bytes32 public constant ROL_ADMIN = keccak256("ROL_ADMIN");
    bytes32 public constant ROL_HISTORIADOR = keccak256("ROL_HISTORIADOR");

    // "Comunidad Kichwa"
    // "KICHWA"
    constructor() ERC721("Comunidad Kichwa", "KICHWA") {
        _grantRole(ROL_ADMIN, msg.sender);
    }

    function releaseFunds() private onlyAdmin {
        // TO-DO
        // implementing the logic
    }

    function addRoleHistoriographer(address account) public onlyAdmin {
        _grantRole(ROL_HISTORIADOR, account);
    }

    function removeRoleHistoriographer(address account) public onlyAdmin {
        _revokeRole(ROL_HISTORIADOR, account);
    }

    // modifiers
    modifier onlyAdmin() {
        require(
            hasRole(ROL_ADMIN, msg.sender),
            "It is enable only for an ADMIN"
        );
        _;
    }

    modifier onlyHistoriographer() {
        require(
            hasRole(ROL_HISTORIADOR, msg.sender),
            "It is enable only for an HISTORIOGRAPHER"
        );
        _;
    }

    // The following functions are overrides required by Solidity.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
