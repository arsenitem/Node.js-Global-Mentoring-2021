export default {
    sortByName(a, b) {
        let loginA = a.login.toUpperCase();
        let loginB = b.login.toUpperCase();
        if (loginA < loginB) {
          return -1;
        }
        if (loginA > loginB) {
          return 1;
        }

        return 0;
    },

    errorResponse(schemaErrors) {
        const errors = schemaErrors.map((error) => {
            let { path, message } = error;
            return { path, message };
        });
        return {
            status: "failed",
            errors
        };
    },

    validateSchema(schema) {
        return (req, res, next) => {
            const { error } = schema.validate(req.body, {
                abortEarly: false,
                allowUnknown: false
            })

            if (error && error.isJoi) {
                res.status(400).json(this.errorResponse(error.details));
            } else {
                next();
            }
        }
    }
}