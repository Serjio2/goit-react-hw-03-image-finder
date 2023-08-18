import { GlobalStyle } from "./GlobalStyle";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";

export const App = () => {
  return (
    <div >
      <GlobalStyle/>
      <Searchbar />
      <ImageGallery />
    </div>
  );
};
