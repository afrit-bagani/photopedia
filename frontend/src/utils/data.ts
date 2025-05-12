export const userQuesry = (userId: string) => {
  const query = `*[_type = 'user' && _id = '${userId}']`;
  return query;
};

export const searchQuery = (searchTerm: string) => {
  const query = `[_type == 'pin']`;
  return query;
};
