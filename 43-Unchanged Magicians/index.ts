const magicians = ["Ronaldo", "Mark", "Trump","Dani","Pablo Picasoo"];

function makeGreat(magicians:string[]) {
    const greatMagicians = [];
    for (const magician of magicians) {
      const greatMagician = magician + " the Great";
      greatMagicians.push(greatMagician);
    }
    return greatMagicians;
  }
  
  function showMagicians(magicians:string[]) {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  
  const greatMagicians = makeGreat(magicians.slice()); // make a copy of the magicians array
  
  showMagicians(magicians);
  showMagicians(greatMagicians);