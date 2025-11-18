import { possibleReplies } from "@/services/ai/NonPN/replies";

export class NonPNAI {
  constructor() {}

  generateAnswer(message: string): string {
    const replyIndex = Date.now() % possibleReplies.length;

    return possibleReplies[replyIndex];
  }
}
