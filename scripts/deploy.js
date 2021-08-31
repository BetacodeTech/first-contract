async function main() {
    const Counter = await ethers.getContractFactory("Counter")

    // Start deployment, returning a promise that resolves to a contract object
    const counter = await Counter.deploy()
    console.log("Contract deployed to address:", counter.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
