const parseEnv = () => {
  const envVariables = process.env;
  const envEntries = Object.entries(envVariables);
  console.log(
    envEntries
      .filter(([key]) => key.startsWith("RSS_"))
      .map(([key, value]) => `${key}=${value}`)
      .join("; ")
  );
};

parseEnv();
