const errorResponse = (schemaErrors) => {
    const errors = schemaErrors.map((error) => {
        let { path, message } = error;
        return { path, message };
    });
    return {
        status: "failed",
        errors
    };
};

export const validateSchema = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
            allowUnknown: false
        })

        if (error && error.isJoi) {
            res.status(400).json(errorResponse(error.details));
        } else {
            next();
        }
    }
}
