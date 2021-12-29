import { useState, useEffect } from "react"
import './../../../styles/Carrusel.scss'

export const Carrusel = ({ items, n }) => {

  const [slide, setSlide] = useState(1);
  const totalSlides = Math.ceil(items.length / n);
  const [itemsToShow, setItemsToShow] = useState(
    items?.slice((slide - 1) * n, slide * n)
  );
  useEffect(() => {
    setItemsToShow(items.slice((slide - 1) * n, slide * n));
  }, [slide, items, n]);
  const previous = () => {
    if (slide === 1) setSlide(totalSlides);
    else setSlide(slide - 1);
  };
  const next = () => {
    if (slide === totalSlides) setSlide(1);
    else setSlide(slide + 1);
  }

  return (
      itemsToShow.length ? (
        <div className="carousel-container">
          <div>
            <button onClick={previous} className="button">{"<"}</button>
          </div>
          <div>
            <div className="carousel-items-items">{itemsToShow}</div>
            <div className="carousel-items-pages">{`${slide} of ${totalSlides}`}</div>
          </div>
          <div>
            <button onClick={next} className="button">{">"}</button>
          </div>
        </div>
      ) : null
  )
}
