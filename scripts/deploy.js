const main = async () => {
    try {
        const nftContractFactory = await hre.ethers.getContractFactory("ChainBattles");
        const nftContract = await nftContractFactory.deploy();
        await nftContract.deployed();
        console.log("Contract deployed to:", nftContract.address)
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

main();