module.exports = {
  success: (res, message, data = null, code = 200) => {
    return res.status(code).json({
      success: true,
      message,
      data,
    });
  },

  error: (res, message, errors = [], code = 400) => {
    return res.status(code).json({
      success: false,
      message,
      errors,
    });
  }
};
