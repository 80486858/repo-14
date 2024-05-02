import validator from "./rules/snils.js";

const snils = {
  type: 'string',
  errors: true,
  validate: function validate(length, data) {
    validate.errors = [
      {
        keyword: 'inn',
        message: validator.errorMessage(),
        params: { keyword: 'snils' },
      },
    ];

    return !data || validator.condition(data);
  },
}

export default snils;
