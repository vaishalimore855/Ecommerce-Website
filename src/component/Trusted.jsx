import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper>
      <div className="brand-section">
        <div className="container">
          <h3>Trusted By 1000+ Companies</h3>
          <div className=" brand-section-slider">
            <div className="slide">
              <img
                src="https://digitalsynopsis.com/wp-content/uploads/2019/06/negative-space-logos-1.jpg"
                alt="trusted brand"
              />
            </div>
            <div className="slide">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwG3Zz6PtPmela1b_fBn9eNIimUjk1zI2iRg&s"
                alt="trusted brand"
              />
            </div>
            <div className="slide">
              <img
                src="https://t4.ftcdn.net/jpg/05/65/51/53/360_F_565515340_dFTA9J9vBeCrADkka8fie0HKTRNDqMLF.jpg"
                alt="trusted brand"
              />
            </div>
            <div className="slide">
              <img
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/06/09112534/k-by-jisan-branding-dribbble.png"
                alt="trusted brand"
              />
            </div>
            <div className="slide">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KGHGg6EW56b8-9tSU1AURhF6ZUiFyqh69g&s"
                alt="trusted brand"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
