//Course on programing from Eduardo: https://syllabus.migracode.org/courses/introduction-3/course-content/javascript-i/week-1
//The below file is for testing my code from my session notes 

const array = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];
  
  function formatName(name) {
    const filteredArray = name.filter((entry) => typeof entry === "string");
    const formattedArray = filteredArray.map((entry) => entry.toUpperCase () + "!");
    return formattedArray;
  }
  
  const result = formatName(array);
  console.log(result);
  