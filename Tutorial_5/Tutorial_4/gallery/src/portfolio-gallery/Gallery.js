import Tabs from "./Tabs"; 
import Items from "./Items"; 
import Data from "./Data"; 
import { useState } from "react"; 

function Gallery() {
    // Initialize the state with the complete Data set
    const [data, setData] = useState(Data);

    // Extract the category data from the Data array
    const categoryData = Data.map((value) => {
        return value.category;
    });

    // Create a list of unique categories, including "all"
    const tabsData = ["all", ...new Set(categoryData)];

    // Function to filter data based on selected category
    const filterCategory = (category) => {
        if (category === "all") {
            setData(Data); // If "all" is selected, reset to the full data set
            return;
        }
        // Filter the data based on the selected category
        const filteredData = Data.filter((value) => {
            return value.category === category;
        });
        setData(filteredData); // Update the state with the filtered data
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-1">
                    {/* Empty column for spacing */}
                </div>
                <div className="col-sm-10">
                    {/* Render the Tabs component and pass filterCategory and tabsData as props */}
                    <Tabs filterCategory={filterCategory} tabsData={tabsData} />
                    {/* Render the Items component and pass the filtered data as props */}
                    <Items data={data} />
                </div>
                <div className="col-sm-1">
                    {/* Empty column for spacing */}
                </div>
            </div>
        </div>
    );
}

export default Gallery; // Export the Gallery component
