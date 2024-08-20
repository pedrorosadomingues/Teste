import { invalidDataError } from "../../errors/invalid-data-error.js";

export function validateBody(schema) {
  return validate(schema, "body");
}

export function validateParams(schema) {
  return validate(schema, "params");
}

function validate(schema, type) {
  return (req, res, next) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      res
        .status(400)
        .send(invalidDataError(error.details.map((d) => d.message)));
    }
  };
}
