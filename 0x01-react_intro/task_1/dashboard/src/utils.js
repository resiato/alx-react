// Function that returns the current date
const getFullYear = () => {
  let this_year = new Date().getFullYear();
  return this_year;
};

// Function that return Holberton School if isIndex is true and Holberton School main dashboard if false
const getFooterCopy = (isIndex) => {
  if(isIndex === true) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard"; 
  }
}

module.exports = {
	getFooterCopy,
	getFullYear,
};
