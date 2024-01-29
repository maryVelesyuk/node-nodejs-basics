import { createReadStream } from "node:fs";
const { createHash } = await import("node:crypto");

const calculateHash = async () => {
  const hash = createHash("sha256");

  const stream = createReadStream("src/hash/files/fileToCalculateHashFor.txt");
  stream.on("readable", () => {
    const data = stream.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};

await calculateHash();
