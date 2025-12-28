import { useParams } from "react-router-dom";
import { Carrousel } from "../components/Components";

export const CategoriesPage = () => {

  const { id } = useParams();

  return (
    <div className='mx-3'>
      <Carrousel
        categories={[Number(id)]}
      />
    </div>
  );
}