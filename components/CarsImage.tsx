import axios from 'axios';

interface CarImage {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

const CarsImage = ({ carImages }: { carImages: CarImage[] }) => {
  return (
    <div>
      <h1>Car Images</h1>
      <div>
        {carImages.map((image) => (
          <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
};

export async function getImages(): Promise<CarImage[]> { // Add return type annotation
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: 'car',
          per_page: 10,
          client_id: 'Id7YUErF415fd0ZaOBqhlVa9_llFkkw002U_pdiaKFw',
        },
      });
  
      const carImages = response.data.results;
      return carImages;
    } catch (error) {
      console.error('Error fetching car images:', error);
      return [];
    }
  }

export default CarsImage;
