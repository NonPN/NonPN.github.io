import { possibleReplies } from "@/services/ai/NonPN/replies";

export class NonPNAI {
  constructor() {}

  randomFromString(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit int
    }
    return Math.abs(hash);
  }

  generateAnswer(message: string): string {
    const rnd = this.randomFromString(message);
    const replyIndex = (Date.now() + rnd) % possibleReplies.length;

    return possibleReplies[replyIndex];
  }
}
