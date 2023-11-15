import React from "react";
import "./directory.styles.scss";
import DirectoryItem from "../directory-item/Directory-item.component";

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://strictlyfitteds.com/wp-content/uploads/2022/10/59fifty-fitted-hat-collection-mlb-new-era.jpg",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://media.gq.com/photos/5937211628a253775a431e5d/4:3/w_2219,h_1664,c_limit/summer-suts-bolioli-01.jpg",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://thegoodlife.fr/wp-content/thumbnails/uploads/sites/2/2022/04/les-boutiques-changent-ere-sneakers-1-56-zhenzhencao-tt-width-1200-height-630-fill-0-crop-1-bgcolor-ffffff.jpg",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://static1.squarespace.com/static/575ef1b97da24fd757acb056/575f042c40261d3eb6e72f10/620196a385689115d3e9fdbd/1694072699710/young+woman+shopping+at+trendy+boutique.jpg?format=1500w",
      route: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://img.freepik.com/photos-gratuite/jeune-homme-faisant-du-shopping-dans-magasin-vetements-pour-hommes-parlant-au-telephone_1303-31006.jpg?w=2000",
      route: "shop/mens",
    },
  ];
  return (
    <div className="Categories-container">
      {categories.map((category, index) => (
        <DirectoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default Directory;
