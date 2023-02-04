const fillOutPerson = (firstName, lastName) => {
  return { names: { firstName, lastName } };
};

const fillOutRolesAndReponsibilities = (role, responsibilities) => {
  if (role) {
    return { role: { role } };
  } else {
    return { responsibilities: { responsibilities } };
  }
};

const captain = {
  names: { ...fillOutPerson("Pete", "Smith") },
};

const roles = { role: { ...fillOutRolesAndReponsibilities("Captain") } };

const responsibilities = {
  responsibilities: {
    ...fillOutRolesAndReponsibilities(undefined, [
      "steer ship",
      "avoid mutiny",
      "achieve safe passage",
    ]),
  },
};

const person = {
  captain: { ...captain, ...roles, ...responsibilities },
};
console.log(person);

// This is the output we want from person... fix the code to achieve that because this is not what is currently outputted...
// {
//   captain: {
//     names: { firstName: 'Pete', lastName: 'Smith' },
//     role: 'Captain',
//     responsibilities: [ 'steer ship', 'avoid mutiny', 'achieve safe passage' ]
//   }
// }