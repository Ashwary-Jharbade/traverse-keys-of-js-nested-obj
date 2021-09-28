/**
 * @description: Function generates arrow lines from the left
 * @argument: Function accepts one arguments of type 'Number'
 * */ 
const spaceGenerator = (n) => {
  let space = "";
  for (let i = 0; i < n; i++) {
    space = space + "--------";
  }
  return space + "---->";
};

/**
 * @description: Function traverse through the object and print the object keys 
 * @argument: Function accepts two arguments first of type 'Object' and second default parameterised of type 'Number'
 * */ 
const traverseObject = (obj, n = 0) => {
  for (let i in obj) {
    console.log(spaceGenerator(n), i);
    if (obj[i].constructor.name === "Object") {
      traverseObject(obj[i], n + 1);
    }
  }
};

// Initializing obj with a nested object 
let obj = {
  name: "Pikachu",
  type: "Electric",
  attack: {
    normal: {
      first: "Tail whip",
      second: "Quick attack",
    },
    electric: {
      first: "Thunder bolt",
      third: "Electro ball",
      fourth: "Thunder wave",
    },
  },
};

// Calling function traverseObject
traverseObject(obj);

// o/p 
// ----> name
// ----> type
// ----> attack
// ------------> normal
// --------------------> first
// --------------------> second
// ------------> electric
// --------------------> first
// --------------------> third
// --------------------> fourth
