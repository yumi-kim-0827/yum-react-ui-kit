import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createAt과 updateAt을 자동으로 추가
  }
);

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
