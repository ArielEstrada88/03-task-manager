const asyncWrapper = (fn) => {
    return async (requestAnimationFrame, res, next) => {
        try {
            await fn(req, res, next)
        }   catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper