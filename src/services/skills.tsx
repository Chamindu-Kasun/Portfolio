export const getSkills = async () => {
  try {
    const res = await fetch(
      `https://storage.googleapis.com/portfolio_ck/skills.json`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const response = await res.json();
    if (!res.ok) {
      throw new Error(
        `HTTP error! status: ${res.status}, Error getting skills`
      );
    }
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(`Error getting skills`);
  }
};
