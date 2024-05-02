import validator from "./rules/bodyNumber.js";

const bodyNumber = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data) {
    validate.errors = [
      {
        keyword: 'bodyNumber',
        message: validator.errorMessage(),
        params: { keyword: 'bodyNumber' },
      },
    ];

    return !data || validator.condition(data);
  },
}

export default bodyNumber;
