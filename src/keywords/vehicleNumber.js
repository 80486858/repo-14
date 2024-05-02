import validator from "./rules/vehicleNumber.js";

const vehicleNumber = {
  type: 'string',
  errors: true,
  validate: function validate(schema, data) {
    validate.errors = [
      {
        keyword: 'vehicleNumber',
        message: validator.errorMessage(),
        params: { keyword: 'vehicleNumber' },
      },
    ];

    return !data || validator.condition(data);
  },
}

export default vehicleNumber;
