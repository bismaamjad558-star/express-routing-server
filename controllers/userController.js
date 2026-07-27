export const getUsers = (req, res) => {
  const { name } = req.query;

  if (name) {
    return res.json({
      message: `Hello, ${name}!`,
    });
  }

  res.json({
    message: "All Users",
    users: [
      { id: 1, name: "Bisma" },
      { id: 2, name: "Ali" },
      { id: 3, name: "Sara" },
    ],
  });
};

export const createUser = (req, res) => {
  const { name, email } = req.body;

  res.status(201).json({
    message: "User created successfully",
    user: { name, email },
  });
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  res.json({
    message: `User ${id} updated successfully`,
    updatedUser: { id, name, email },
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  res.json({
    message: `User ${id} deleted successfully`,
  });
};