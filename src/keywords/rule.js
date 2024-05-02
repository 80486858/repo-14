import rules from "./rules";

const validators = new Map(Object.entries(rules));

const isEmpty = (value) => {
  return value === null || value === undefined || value === "";
};

const rule = {
  type: "string",
  errors: true,
  validate: function validate(key, value) {
    const [rule, ...modifiers] = key.split("-");

    if (!validators.has(rule)) {
      throw Error(`Rule "${rule}" is not defined.`);
    }

    const validator = validators.get(rule);

    validate.errors = [
      {
        keyword: "rule",
        message: validator.errorMessage(value),
        params: { keyword: "rule" },
      },
    ];

    if (!modifiers.includes("required") && isEmpty(value)) {
      return true;
    }

    if (["inn", "kpp"].includes(rule) && modifiers.includes("tinkoff")) {
      return validator.condition(value) || value === "0";
    }

    return validator.condition(value);
  },
};

export default rule;
