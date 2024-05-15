export const sendEmail = async (formData:any) => {
    try{
        const res = await fetch(
            `/api/sendEmail`, 
            {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify(formData),
            }
          );
          const response = await res.json();
          if (!res.ok) {
            throw new Error(
              `HTTP error! status: ${res.status}, Error sending email`
            );
          }
          return response; 
    } catch(error){
        console.error(error);
        throw new Error("Error sending email")
    }
}