import validator from "./rules/latin.js";

const latin = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data) {
    validate.errors = [
      {
        keyword: 'latin',
        message: validator.errorMessage(),
        params: { keyword: 'latin' },
      },
    ];

    return !data || validator.condition(data);
  },
}

export default latin;
