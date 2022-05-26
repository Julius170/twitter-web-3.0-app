
import { ethers } from "hardhat";

async function main() {

  const profileImageMinterFactory = await ethers.getContractFactory("ProfileImageNfts");
  const profileImageContract = await profileImageMinterFactory.deploy();

  await profileImageContract.deployed();
*  console.log("Greeter Image Minter Contract **deployed to:", profileImageContract.address);
};

(async () => {
  try {
    await mint()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})