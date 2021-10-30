import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./explore.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FoodItem from "./foodItem";
import { getAllDishes } from "../../Pages/helper/dishapicall";

const Explore = () => {
  const [isbusy, setIsbusy] = useState(true);
  const [dishes, setDishes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const loadAllDishes = () => {
    getAllDishes().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setDishes(data);
        setIsbusy(false);
      }
    });
  };

  const PER_PAGE = 8;
  const offset = currentPage * PER_PAGE;
  const currentPageData = dishes
    .slice(offset, offset + PER_PAGE)
    .sort()
    .map((dish, index) => {
      return (
        <div key={index} className="exploredishcard">
          <FoodItem dish={dish} />
        </div>
      );
    });
  const pageCount = Math.ceil(dishes.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  useEffect(() => {
    loadAllDishes();
  }, []);

  return (
    <div>
      <Header />
      <div className="explore">
        <div className="main_title_exp">
          <p>Explore Us</p>
        </div>
        {isbusy ? (
          <div>Loading...</div>
        ) : (
          <div className="main_grid">{currentPageData}</div>
        )}
        <ReactPaginate
          previousLabel={"< Previous"}
          nextLabel={"Next >"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"previous_pagination__link"}
          nextLinkClassName={"next_pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageClassName={"pagination_page_number"}
          pageRangeDisplayed={2}
          breakClassName={"pagination_break"}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Explore;
