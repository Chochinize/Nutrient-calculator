import { useParams } from "react-router-dom";

const serverUrl = 'http://localhost:5050';
export const authenticateUser = async () => {
  const { id } = useParams();
  try {
    const res = await axios.get(
      `http://localhost:5050/u/${id}`,
      { withCredentials: true }
    );
      const data = await res.json()
      console.log('out ')

      
      
      return data;
    } catch (error) {
      return error;
    }
  };