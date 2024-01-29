import { argv } from "node:process";

const parseArgs = () => {
  const commandLineArgs = argv.slice(2);
  const commandLineArgsWithValues = [];
  for (let i = 0; i < commandLineArgs.length; i++) {
    console.log(i);
    if (commandLineArgs[i].startsWith("--")) {
      res.push(`${commandLineArgs[i]} is ${commandLineArgs[i + 1]}`);
      i++;
    }
  }

  console.log(commandLineArgsWithValues.join(", "));
};

parseArgs();
