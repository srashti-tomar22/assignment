import React from "react";
import "../../Style/style.css";
import logo from "../../images/gcategory.svg";

const Levels = () => {
    return (
      <div className="contain">
        <div className="container">
          <div className="equal-parts-container">
            <div>
              <h2 className="heading">Why The Industry Choose Clickdee?</h2>
              <p className="para">
                When using Lorem Ipsum for creating dummy content for your newly
                created website, you can select the text formats you want from
                the tool. Like, words, sentences, or paragraphs. Then, you can
                select whether you want HTML markup in your dummy content or
                not. Then, you can choose the number of words and paragraphs for
                your dummy content and execute the plan accordingly. You can use
                this tool at incrementors.com for free.
              </p>
            </div>
            <div>
              <img src={logo} height="40px"></img>
              <h3 className="head">
                Choose your <br></br> Local Targeting
              </h3>
            </div>
            <div>
              <img src={logo} height="40px"></img>{" "}
              <h3 className="head">
                Choose your <br></br>Local Targeting
              </h3>
            </div>
          </div>
          <div className="second-container">
            <div className="equal-parts-container">
              <div>
                <img src={logo} height="40px" alt="Logo" />
                <h3 className="head">
                  Choose your <br /> Local Targeting
                </h3>
              </div>
              <div>
                <img src={logo} height="40px" alt="Logo" />
                <h3 className="head">
                  Choose your <br /> Local Targeting
                </h3>
              </div>
              <div>
                <img src={logo} height="40px" alt="Logo" />
                <h3 className="head">
                  Choose your <br /> Local Targeting
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Levels;
