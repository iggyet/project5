export default function initUsersController(db) {
  const register = async (request, response) => {
    console.log(request.body);

    try {
      const user = {
        name: request.body.name,
        rerolls: request.body.rerolls,
      };
      const newUser = await db.User.create(user);
      console.log(newUser);
      response.send(newUser);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (request, response) => {
    console.log(request.body);
    try {
      const user = await db.User.findOne({
        where: {
          name: request.body.name,
        },
      });
      console.log("user", user);

      const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
      shaObj.update(request.body.password);
      const hashedPassword = shaObj.getHash("HEX");
      console.log("hashed password", hashedPassword);

      if (hashedPassword === user.password) {
        response.cookie("loggedIn", true);
        response.cookie("userId", user.id);
        response.send({ user });
        console.log(" logged in ");
      } else {
        console.log("not logged in ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { register, login };
}
