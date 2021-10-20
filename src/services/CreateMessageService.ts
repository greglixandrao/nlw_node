import prismaClient from "../prisma";

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

<<<<<<< HEAD
    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_ate: message.create_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit("new_message", infoWS);

=======
>>>>>>> 958542dda9bfad8d3d9a0e7ca8c3bb5404dee7ad
    return message;
  }
}

export { CreateMessageService };
