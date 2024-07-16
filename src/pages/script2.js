async function getCountrues() {
  const countries = ["usa", "canada", "mexico"];
  if (countries.length) {
    return countries;
  } else {
    throw new Error("No Counties Found");
  }
}
function getStates(country) {
  const states = {
    usa: ["california", "florida", "texas"],
    canada: ["jark", "norm", "hall"],
    mexico: ["tyh", "htr", "yuo"],
  };
  if (states[country].length) {
    return states[country];
  } else {
    throw new Error("No states Found");
  }
}
function getPlaces(state) {
  const places = {
    california: ["a", "b", "c"],
    florida: ["d", "e", "f"],
    texas: ["g", "h", "i"],
  };
  if (places[state].length) {
    return places[state];
  } else {
    throw new Error("No places Found");
  }
}

async function getData() {
  try {
    const countries = await getCountrues();
    const states = await getStates(countries[0]);
    const places = await getPlaces(states[0]);
    console.log(places);
  } catch (error) {
    console.log(error);
  }
}
getData();
