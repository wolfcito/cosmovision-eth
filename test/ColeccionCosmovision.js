const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Coleccion Cosmovision", () => {
  let owner;
  let PColeccionCosmovision;
  let coleccionCosmovision;

  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    PColeccionCosmovision = await ethers.getContractFactory("ColeccionCosmovision");
    coleccionCosmovision = await PColeccionCosmovision.deploy(10);
    await coleccionCosmovision.deployed();
  });

  describe("Contract deployment", async () => {
    
    // Test Contract creation, token name,
    it("Constract was created successfully", async () => {
      expect(await coleccionCosmovision.name()).to.be.equal("Comunidad Kichwa");
      expect(await coleccionCosmovision.symbol()).to.be.equal("KICHWA");
    });

    it("addDonation method", async () => {
        const donorName = "Pablo";
        await coleccionCosmovision.connect(addr2).addDonation(donorName, {value: 11});
        const donations = await coleccionCosmovision.donations(0);
        await coleccionCosmovision.balanceOf(coleccionCosmovision.address);
        expect(donations.name).to.be.equal(donorName);
    });

  });
});
