function Tabs({ filterCategory, tabsData }) {
  return (
    <>
      <div className="text-center my-4">
        {
          // Map over the tabsData array to render a button for each category
          tabsData.map((category, index) => {
            return (
              // Render a button for each category
              <button
                type="button"
                className="btn btn-outline-primary mx-2 text-capitalize"
                onClick={() => filterCategory(category)} // Set the onClick event to call filterCategory with the current category
                key={index} // Use the index as a key for each button
              >
                {category} {/* Display the category name */}
              </button>
            );
          })
        }
      </div>
    </>
  );
}

export default Tabs; // Export the Tabs component
