//EXERCISE LEVEL 1
//01

//2
// points = [-12, -4, -3, -1, 0, 4, 8]
// sortedPoints = parseInt(points.toString().split('').reverse());
// distance = sortedPoints[-1] - sortedPoints[0]
// console.log(distance) 

//EXERCISE LEVEL 2
function tenMostFrequentWords(text) {
  const cleanedText = text.toLowerCase().replace(/[^\w\s]/g, '');
  const words = cleanedText.split(/\s+/);
  const wordMap = {};
  for (const word of words) {
    if (word) {
      wordMap[word] = (wordMap[word] || 0) + 1;
    }
  }
  const sorted = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
  const topTen = sorted.slice(0, 10);
  return topTen.map(([word, count]) => ({ word, count }));
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. 
I love Python if you do not love something which can give you all the capabilities 
to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));

//EXERCISE LEVEL 3
//1
function cleanText(text) {
  const cleaned = text.replace(/[^a-zA-Z\s]/g, '').toLowerCase();

  const words = cleaned.split(/\s+/).filter(Boolean);
  const wordCount = {};
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  const sorted = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

  const topThree = sorted.slice(0, 3).map(([word, count]) => ({ word, count }));

  return { cleaned, topThree };
}
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. 
;I found tea@ching m%o@re interesting tha@n any other %jo@bs. 
%Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence));


