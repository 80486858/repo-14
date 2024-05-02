import validator from "./rules/inn.js";

const inn = {
  type: 'string',
  errors: true,
  validate: function validate(length, data) {
    validate.errors = [
      {
        keyword: 'inn',
        message: validator.errorMessage(),
        params: { keyword: 'inn' },
      },
    ];

    return !data || validator.condition(data);
  },
}



export default inn;
