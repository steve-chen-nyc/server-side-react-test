const user = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  User.findById = async id => {
    let user = await User.findOne({
      where: { id: id }
    });

    if (!user) {
      user = {
        username: "DEFAULT USER"
      };
    }

    return user;
  };

  return User;
};

export default user;
