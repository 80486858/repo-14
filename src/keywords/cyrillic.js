import validator from "./rules/cyrillic.js";

const cyrillic = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data) {
    validate.errors = [
      {
        keyword: 'cyrillic',
        message: validator.errorMessage(),
        params: { keyword: 'cyrillic' },
      },
    ];
    return !data || validator.condition(data);
  },
}

export default cyrillic;
