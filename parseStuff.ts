const getContent = () => Deno.readTextFile('./example_data.txt')

const calculateAverageScore = (getContent: () => Promise<string>) => getContent().then(result => {
    const lines = result.split("\n").map(l => l.split(","))
    console.log(lines)
})

calculateAverageScore(getContent)