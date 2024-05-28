export const getSubjects = async () => {
    try {
      const res = await fetch(
        `https://storage.googleapis.com/portfolio_ck/subjects.json`,
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
          `HTTP error! status: ${res.status}, Error getting education qualifications`
        );
      }
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(`Error getting education qualifications`);
    }
  };
  