import logger from "../utils/logger";
export const infoLogger = () => {
    return (req, res, next) => {
        logger.info('Request ' +req.method + ' ' +req.url +' ,Parameters: '+ JSON.stringify(req.body));
        next();
    }
}
export const errorLogger = () => {
    return (err, req, res, next) => {
        logger.error('Request ' +req.method + ' ' +req.url +' ,Parameters: '+ JSON.stringify(req.body)+ ', Error:' + err.stack);
        res.status(500).send('Something went wrong!');
    }
}