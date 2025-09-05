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
  const { name, description } = req.body;
  const { id } = req.params;

  //   const currentCategory = await ModelName.findByPk(id);

  if (!currentCategory) {
    return res.status(STATUS_CODES.NOT_FOUND).json({
      statusCode: 404,
      message: STATUS_CODES.NOT_FOUND,
    });
  }

  //   const [status, updatedData] = await ModelName.update(
  //     { name, description },
  //     {
  //       where: { id },
  //       returning: true,
  //     }
  //   );

  //   if (!status) {
  //     return res.status(STATUS_CODES.NOT_FOUND).json({
  //       statusCode: 404,
  //       message: "Update failed",
  //     });
  //   }

  return res.status(STATUS_CODES.SUCCESS).json({
    statusCode: STATUS_CODES.SUCCESS,
    message: "Category updated successfully",
    // data: updatedData[0], // Returning the updated category data
  });
});

const get = asyncErrorHandler(async (req, res) => {
 
    const {count , rows} = await User.findAndCountAll({
      order: [["createdAt", "DESC"]],
      ...req.pagination
    });

  res.status(STATUS_CODES.SUCCESS).json({
    statusCode: 200,
    message: TEXTS.FOUND,
    data: rows,
    count,
    limit: req.pagination.limit,
    
  });
});

const del = asyncErrorHandler(async (req, res) => {
  // const deleted = await ModelName.destroy({
  //   where: {
  //     id: req.params?.id
  //   }
  // });

  // if(!deleted){
  //   return res.status(STATUS_CODES.NOT_FOUND).json({
  //     statusCode: 404,
  //     message: "No record found against the categoryId for deletion.",
  //   });
  // }

  res.status(STATUS_CODES.SUCCESS).json({
    statusCode: 200,
    message: TEXTS.DELETED,
  });
});

module.exports = {
  create,
  update,
  get,
  del,
};
