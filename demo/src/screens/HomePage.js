import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { DefaultLoading } from "../components/DefaultLoading";
// import SelectCountry from "../components/SelectCountry";
// import { fetchNews, removeSearchResults } from "../redux/actions/fetchNews";
// import NewsCard from "../components/NewsCard";
// import MessageTost from "../components/MessageTost";

// import "../assets/mainLayout.css";

function HomePage(props) {
    // useEffect(() => {
    //     props.removeSearchResults();
    // }, []);

    // const newsItemToDisplay =
    //     props.getAllNews &&
    //     props.getAllNews.map((item, index) => (
    //         <NewsCard items={item} key={index} />
    //     ));

    // return (
    //     <React.Fragment>
    //         <div className="home_top">
    //             <p>Top Headlines</p>
    //             <SelectCountry />
    //         </div>
    //         <div className="news_card_container">
    //             {props.isLoading ? <DefaultLoading /> : newsItemToDisplay}
    //         </div>
    //         {props.getErrorInfo ? <MessageTost /> : null}
    //     </React.Fragment>
    // );

    return(
        <h1>Test</h1>
    )
}
export default HomePage;