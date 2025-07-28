// const asyHandler = () => {};

export { asyHandler };

const asyHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      massage: error.massage,
    });
  }
};
