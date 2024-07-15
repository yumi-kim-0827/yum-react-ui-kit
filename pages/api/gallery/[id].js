import connectToDatabase from "@lib/mongodb"; //몽고디비연결
import Article from "@models/Article"; //데이터 스키마
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  await connectToDatabase(); //몽고디비 연결하고

  const { id } = req.query;
  const article = await Article.findById(id).exec();

  if (req.method === "GET") {
    try {
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: "not variable" });
      }
      if (!article) {
        return res
          .status(404)
          .json({ message: "해당 게시글을 찾을 수 없습니다." });
      }
      return res.status(200).json(article);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", id });
    }
  } else if (req.method === "PUT") {
    try {
      const article = req.body;
      const updatedArticle = await Article.findByIdAndUpdate(id, article, {
        new: true,
      });

      return res.status(200).json(updatedArticle);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", id });
    }
  } else if (req.method === "DELETE") {
  }
}
