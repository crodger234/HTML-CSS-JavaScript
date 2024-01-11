document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  let characterNumber = Math.ceil(Math.random() * 83);
  console.log(characterNumber);
  const character = String(characterNumber);
  console.log(character);
  var string = `https://swapi.dev/api/people/${character}/`;
  console.log(string);

  fetch(`https://swapi.dev/api/people/${character}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      /////////// How I got the character Name ////////////////////////////////////////////////////////

      const name = document.getElementById("name");
      name.innerText = data["name"];

      /////////// How I got the character height ////////////////////////////////////////////////////////

      const height = document.getElementById("height");
      heightFloor = Math.floor(data["height"] / 12);
      heightMultiplied = heightFloor * 12;
      leftOverInches = data["height"] - heightMultiplied;

      height.innerText = `${data["name"]} is ${heightFloor} feet and ${leftOverInches} inches tall.`;

      /////////// How I got the character Gender ////////////////////////////////////////////////////////

      if (data["gender"] === "n/a") {
        const gender = document.getElementById("gender");
        gender.innerText = "This character is neither a female or male.";
      } else {
        const gender = document.getElementById("gender");
        gender.innerText = data["gender"];
      }

      /////////// How I got the character Birth year ////////////////////////////////////////////////////////

      if (data["birth_year"] === "unknown") {
        const birthyear = document.getElementById("birthyear");
        birthyear.innerText = "There is no record of their birth year.";
      } else {
        const birthyear = document.getElementById("birthyear");
        birthyear.innerText = data["birth_year"];
      }
      
      

      informationCharacter = console.log(
        Math.floor(data["height"] / 12),
        data["name"],
        data["gender"],
        data["birth_year"]
      );
    });

  // number 17 is 404 error
}
