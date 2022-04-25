import { useParams } from "react-router-dom";


export const authenticateUser = async () => {
  const { id } = useParams();
  try {
    const res = await axios.get(
      `/`,
      { withCredentials: true }
    );
      const data = await res.json()
      console.log('out ')

      
      
      return data;
    } catch (error) {
      return error;
    }
  };