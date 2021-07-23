const getContent = () => Deno.readTextFile("./example_data.txt");

const calculateAverageScore = (getContent: () => Promise<string>) =>
    getContent().then((result) => {
        const lines = result.split("\n")
            .map((l) => l.split(","))
            .filter((_, i) => i !== 0);
        const scores = lines.map((l) => Number(l[3]));
        return scores.reduce((a, c) => a + c) / scores.length;
    });

console.log("Average score: " + await calculateAverageScore(getContent));
