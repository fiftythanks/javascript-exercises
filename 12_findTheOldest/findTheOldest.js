const findTheOldest = function(people) {
  const currentYear = (new Date()).getFullYear();

  people.sort((person1, person2) => {
    let secondDate1;
    let secondDate2;
    if (person1.yearOfDeath) {
      secondDate1 = person1.yearOfDeath;
    } else {
      secondDate1 = currentYear;
    }

    if (person2.yearOfDeath) {
      secondDate2 = person2.yearOfDeath;
    } else {
      secondDate2 = currentYear;
    }
    
    const age1 = secondDate1 - person1.yearOfBirth;
    const age2 = secondDate2 - person2.yearOfBirth;
    return age1 - age2;
  });
  return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
