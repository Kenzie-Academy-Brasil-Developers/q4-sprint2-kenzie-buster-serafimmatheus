import { hash } from "bcryptjs";
import { Request } from "express";
import { sign } from "jsonwebtoken";
import { User } from "../entities/User";
import { ErrorHandlers } from "../errors";
import { userRepository } from "../repositories";
import { serializedUserShema, serializedUsersShema } from "../schemas";
import * as dotenv from "dotenv";

dotenv.config();

interface ILogin {
  statusCode: number;
  message: object;
}

class UserService {
  createUserService = async ({ validated }: Request) => {
    (validated as User).password = await hash(validated.password, 10);

    (validated as User).email.toLocaleLowerCase();

    (validated as User).isAdm = false;

    const createduser = await userRepository.save(validated);

    return serializedUserShema.validate(createduser, { stripUnknown: true });
  };

  getAllUserService = async () => {
    const getUsers = await userRepository.allUser();

    return await serializedUsersShema.validate(getUsers, {
      stripUnknown: true,
    });
  };

  getByIdUserService = async () => {};

  updateUserService = async ({ params, decoded, validated }: Request) => {
    (validated as User).password = await hash((validated as User).password, 10);

    if ((decoded as User).isAdm) {
      (validated as User).isAdm = (validated as User).isAdm;

      await userRepository.updateUser(params.id, {
        ...validated,
      });

      const userFind = await userRepository.retieve({ id: params.id });

      return await serializedUserShema.validate(userFind, {
        stripUnknown: true,
      });
    }

    if ((decoded as User).id === params.id) {
      if ((validated as User).isAdm || (validated as User).isAdm === false) {
        throw new ErrorHandlers(401, "Você não é uma administrador.");
      }

      await userRepository.updateUser(params.id, {
        ...validated,
      });

      const userFind = await userRepository.retieve({ id: params.id });

      return await serializedUserShema.validate(userFind, {
        stripUnknown: true,
      });
    }

    throw new ErrorHandlers(401, "Você não é uma administrador.");
  };

  loginService = async ({ validated }): Promise<ILogin> => {
    const user = await userRepository.retieve({
      email: (validated as User).email,
    });

    if (!user) {
      throw new ErrorHandlers(404, "Login/password invalid");
    }

    if (!(await user.comparePWD(validated.password))) {
      throw new ErrorHandlers(404, "Login/password invalid");
    }

    const token = sign({ ...user }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return { statusCode: 200, message: { token } };
  };
}

export default new UserService();
