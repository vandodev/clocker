export default (req, res) => {
  console.log("boby:", req.body);
  console.log("auth:", req.headers.authorization);

  res.status(200).json({ name: "Evandro" });
};
