/**
 * Guarantees:
 * No line breaks
 * Only one Number N
 * Assumptions:
 * Number n where n is always an english string version of a number from 1 - 9
 */

let currentNumber=0;
const m = {
  "one": "1",
  "two": "2",
  "three":'3',
  "four":'4',
  "five":'5',
  "six":'6',
  "seven":'7',
  "eight":'8',
  "nine":'9',
}


function replaceNumberN(match,p1,p2,offset,string) {
  currentNumber = Number(m[p1]);
 return `${m[p1]}. ${p2.toUpperCase()}`
}

function replaceNumberNext(match,p1,offset,string){
  return `${++currentNumber}. ${p1.toUpperCase()}`
}

function doTranscription() {

  let rawTranscribedText = process.argv[2];
  // replace all Number Ns with their Number
  let formattedText;
  let initialText;
  let currentNumber;

  let hasN = rawTranscribedText.match(
    /Number (one|two|three|four|five|six|seven|eight|nine)/
  );

  if (hasN == null){
    console.log(rawTranscribedText)
    return rawTranscribedText;
  }


  // capture all Number N
  
  initialText= rawTranscribedText.replace(/Number (one|two|three|four|five|six|seven|eight|nine) (\w)/,replaceNumberN );

  // capture all Number nnext
  formattedText = initialText.replace( /Number next (\w)/g, replaceNumberNext);



  console.log(formattedText)
  return formattedText;
}

doTranscription();
