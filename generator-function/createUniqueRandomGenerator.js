function* createUniqueRandomGenerator(array) {
    const available = array

    while (available.length !== 0) {
        const randomIndex = Math.floor(Math.random() * available.length)
        const value = available[randomIndex]
        let a = Math.floor(Math.random() * 4)
        let b = Math.random() * 10
        b
        a
        // Remove the used value from the list of available values
        available.splice(randomIndex, 1)
        yield value
    }
}

const names = ['Tom', 'Jerry', 'Mike', 'Eddie'`]
const uniqueNames = createUniqueRandomGenerator(names)

for (const name of uniqueNames) {
    console.log(name);
}
