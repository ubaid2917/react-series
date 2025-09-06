const asyncErrorHandler = require("../../utils/asyncErrorHandler");
const { STATUS_CODES, TEXTS } = require("../../config/constants");
const { User } = require("../../models");
const {} = require("sequelize");
const { success, error } = require("../../utils/response");

const create = asyncErrorHandler(async (req, res) => {
  try {
    const isExistEmail = await User.findOne({
      where: { email: req.body.email },
    });
    if (isExistEmail) {
      return error(res, "User already exist");
    }
    const user = await User.create(req.body);

    return success(res, TEXTS.CREATED, user, 201);
  } catch (err) {
    return error(res, "Failed to create user", [err.message], 500);
  }
});

const update = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;

  const [status, updatedData] = await User.update(
    { ...req.body },
    {
      where: { id },
      returning: true,
    }
  );

  if (!status) {
    return error(res, "data not found");
  }

  return success(res, TEXTS.UPDATED, updatedData, 200);
});

const get = asyncErrorHandler(async (req, res) => {
  const { count, rows } = await User.findAndCountAll({
    order: [["createdAt", "DESC"]],
    ...req.pagination,
  });

  res.status(STATUS_CODES.SUCCESS).json({
    statusCode: 200,
    message: TEXTS.FOUND,
    data: rows,
    count,
    limit: req.pagination.limit,
  });
});
const getOne = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  const data = await User.findOne({
    where: { id },
  });

  return success(res, "User Found", data, 200);
});

const del = asyncErrorHandler(async (req, res) => {
  const user = await User.findOne({
    where: { id: req.params?.id },
  });

  if (!user) {
    return error(res, "User not found");
  }

  await User.destroy({
    where: { id: req.params?.id },
  });

  return success(res, TEXTS.DELETED, null, 200);
});

module.exports = {
  create,
  update,
  get,
  getOne,
  del,
};
