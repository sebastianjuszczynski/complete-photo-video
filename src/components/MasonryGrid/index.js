import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";
import gif4 from "../../assets/gif4.gif";
import gif5 from "../../assets/gif5.gif";
import gif6 from "../../assets/gif6.gif";
import gif7 from "../../assets/gif7.gif";
import gif8 from "../../assets/gif8.gif";
import gif9 from "../../assets/gif9.gif";
import gif10 from "../../assets/gif10.gif"
import gif11 from "../../assets/gif11.gif";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import { MasonryContainer } from './styled';


const MasonryGrid = () => {
    const images = [gif1, img2, img5, img8, gif5, gif6, img9, gif8, gif9, gif10, gif11, img1, gif2, img3, img4, gif3, img6, img7, gif4, gif7]

    return (
        <MasonryContainer>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1100: 4 }}
            >
                <Masonry
                    gutter="15px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </MasonryContainer>
    )
}

export default MasonryGrid;
