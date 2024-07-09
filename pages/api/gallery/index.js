import connectToDatabase from "@lib/mongodb"; //몽고디비연결
import Article from "@models/Article"; //데이터 스키마

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "POST") {
    //오직 POST 메서드만 가능하게함
    try {
      const { title, content, nickname, password } = req.body;
      if (!title || !content || !nickname || !password) {
        return res.status(400).json({
          message:
            "타이틀, 내용, 닉네임, 비밀번호, 생성날짜, 업데이트날짜 모두 필요합니다.",
        });
      }

      const newArticle = new Article({
        title,
        content,
        nickname,
        password,
      });
      const savedArticle = await newArticle.save();
      return res.status(201).json(savedArticle);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      const articles = await Article.find({});
      return res.status(200).json(articles);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    console.log("메서드는", req.method);
    return res.status(405).json({ message: req.method });
  }
}
