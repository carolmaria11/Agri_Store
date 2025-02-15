import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${activeTab === 1 ? "fade" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Review 1
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 2 ? "fade" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Review 2
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 3 ? "fade" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Review 3
        </div>
      </div>
      <div className="descriptionbox-description">
        {activeTab === 1 && (
          <p>
            "Excellent Quality and Highly Effective! <br />I am extremely
            satisfied with this product. It delivers exactly as promised and has
            made a remarkable difference in my farming experience. The quality
            is top-notch, and the results are clearly visible. Whether you're
            just starting out or are an experienced farmer, this product is
            reliable and easy to use. It has significantly improved my
            productivity and made my tasks much more manageable. I appreciate
            the attention to detail and the effectiveness it brings to the
            table. I highly recommend this to anyone looking for dependable and
            efficient farming solutions. Definitely worth every penny!"
          </p>
        )}
        {activeTab === 2 && (
          <p>
            "Exceptional Performance and Easy to Use! <br />
            This product exceeded my expectations in every way. It’s designed
            with great attention to detail and is incredibly effective. The ease
            of use is commendable, and the results have been consistently
            outstanding. It has enhanced my farming process, providing great
            value and high efficiency. The quality and performance are truly
            remarkable, making it a reliable choice for both beginners and
            seasoned farmers. I am thoroughly impressed and would definitely buy
            this again. Worth every penny for its exceptional benefits!"
          </p>
        )}
        {activeTab === 3 && (
          <p>
            "Highly Reliable and Great Value! <br />I have been using this
            product for a while now, and it has consistently delivered excellent
            results. The quality is impressive, and it performs exactly as
            described. It has helped me maximize productivity and streamline my
            farming tasks, saving me both time and effort. The product is
            durable and easy to use, making it a fantastic investment for anyone
            in agriculture. I am genuinely pleased with my purchase and would
            recommend it to anyone looking to enhance their farming
            efficiency.Truly a game-changer for my farming routine!"
          </p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;