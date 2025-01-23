export const replacePath = (path) => {
  let existingPath = [
    { path: "qna", switchPath: "question_and_answer" },
    { path: "commission", switchPath: "commission_history" },
    { path: "subscription", switchPath: "subscribe" },
  ];
  let pathObj = existingPath.find((elem) => elem.path == path);
  return pathObj?.switchPath ? pathObj?.switchPath : path;
};
