const main = async () => {
    const gameContractFactory = await ethers.getContractFactory("HafuGame");
    const gameContract = await gameContractFactory.deploy();
    await gameContract.deployed();
    console.log(gameContract.address);
};
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
runMain();
