import { calculateAverageScore } from './calculate.ts'

const getContentFromInternet = () =>
    fetch(
        "https://raw.githubusercontent.com/minnacaptain/have-you-tried-deno-yet/master/example_data.txt",
    ).then((t) => t.text());

console.log(
    "Average score: " + await calculateAverageScore(getContentFromInternet),
);
