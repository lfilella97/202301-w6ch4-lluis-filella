export const question = [
  {
    name: "port",
    type: "input",
    message: "Introduce a number to open the port",
    validate(answer: number) {
      if (Number.isNaN(answer) || Number.isInteger(answer) || answer >= 0) {
        return true;
      }

      return "not a valid value";
    },
  },
];

export default question;
