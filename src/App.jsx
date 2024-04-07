import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllReviews from "./components/AllReviews";
import CreateReview from "./components/CreateReview";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  return (
    <div className="">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/all-reviews"
          element={
            <AllReviews
              isModalOpen={isCreateModalOpen}
              setIsModalOpen={setIsCreateModalOpen}
              reviews={reviews}
            />
          }
        />
      </Routes>

      {/* Modals */}
      <CreateReview
        isModalOpen={isCreateModalOpen}
        setIsModalOpen={setIsCreateModalOpen}
        setReviews={setReviews}
      />
    </div>
  );
};

export default App;
