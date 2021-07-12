import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../repositories/contracts/IUserRepository";
import { IUserTokensRepository } from "../repositories/contracts/IUserTokensRepository";

// import { AppError } from "../../../../shared/errors/AppError";
// import { IDateProvider } from "../../../shared/container/providers/DateProvider/IDateProvider";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("UserTokensRepository")
    private userTokensRepository: IUserTokensRepository // @inject("DayjsDateProvider") // private dateProvider: IDateProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth;

    if (!user) {
      throw new AppError("Email or password incorrect", 400);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect", 400);
    }

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token,
    });

    // const refresh_token_expires_date = this.dateProvider.addDays(
    //   expires_refresh_token_days
    // );

    // await this.usersTokensRepository.create({
    //   user_id: user.id,
    //   refresh_token,
    //   expires_date: refresh_token_expires_date,
    // });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
      refresh_token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
